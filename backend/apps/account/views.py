from functools import partial
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework.permissions import IsAuthenticated, AllowAny

from utils.permissions import CheckPermissions
from utils.constants import RolEnum
from .models import CustomUser, Rol
from utils import transactionals
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework import status
from .serializers import CustomUserSerializer, RolSerializer, CustomUserPasswordSerializer
from django.contrib.auth.hashers import make_password
from rest_framework import generics
from rest_framework.permissions import IsAuthenticated

class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)

        # Add custom claims
        token['username'] = user.username
        token['rol'] = user.rol.id
        token['nombre'] = user.nombre
        # ...

        return token


class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer

class RolList(transactionals.ListCreateAPIView):
    queryset = Rol.objects.all()
    serializer_class = RolSerializer
    def get_permissions(self):
        if self.request.method in ['GET', 'POST', 'PUT', 'PATCH']:
            return [permission() for permission in (partial(CheckPermissions, [RolEnum.PROPIETRIO.value]),)]

class UserList(transactionals.ListCreateAPIView):
  queryset = CustomUser.objects.all()
  serializer_class = CustomUserSerializer

  def get_permissions(self):
        if self.request.method in ['GET', 'POST', 'PUT', 'PATCH']:
            return [permission() for permission in (partial(CheckPermissions, [RolEnum.PROPIETRIO.value]),)]
  
  @transactionals.transactional()
  def post(self, request, *args, **kwargs):
    data = request.data.copy()

    if 'password' in data:
            data['password'] = make_password(data['password'])

    serializer = CustomUserSerializer(data=data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class UserDetail(transactionals.RetrieveUpdateDestroyAPIView):
  queryset = CustomUser.objects.all()
  serializer_class = CustomUserSerializer
  def get_permissions(self):
        if self.request.method in ['GET', 'POST', 'PUT', 'PATCH']:
            return [permission() for permission in (partial(CheckPermissions, [RolEnum.PROPIETRIO.value]),)]

  def put(self, request, *args, **kwargs):
    return self.update(request, *args, **kwargs)

  def patch(self, request, *args, **kwargs):
    return self.partial_update(request, *args, **kwargs)

class UserPasswordView(generics.UpdateAPIView):
    queryset = CustomUser.objects.all()
    serializer_class = CustomUserPasswordSerializer
    permission_classes = [IsAuthenticated]

    def get_object(self):
        # Obtener el objeto de usuario basado en la pk proporcionada en la URL
        pk = self.kwargs.get('pk')
        return self.queryset.get(pk=pk)

    def update(self, request, *args, **kwargs):
        # Realizar la actualización parcial (PATCH) del objeto de usuario
        partial = kwargs.pop('partial', True)
        instance = self.get_object()
        password = request.data.get('password')  # Obtener la nueva contraseña del request data
        if password:
            request.data['password'] = make_password(password)
        serializer = self.get_serializer(instance, data=request.data, partial=partial)
        serializer.is_valid(raise_exception=True)
        self.perform_update(serializer)
        return Response(serializer.data)


@api_view(['GET'])
def getRoutes(request):
    routes = [
        '/api/token',
        '/api/token/refresh',
    ]

    return Response(routes)


# @api_view(['GET'])
# @permission_classes([IsAuthenticated])
# def getNotes(request):
#     user = request.user
#     notes = user.note_set.all()
#     serializer = NoteSerializer(notes, many=True)
#     return Response(serializer.data)