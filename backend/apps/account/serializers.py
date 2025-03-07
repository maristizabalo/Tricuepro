from rest_framework import serializers
from .models import CustomUser, Rol


class CustomUserSerializer(serializers.ModelSerializer):
  rol = serializers.PrimaryKeyRelatedField(required=False, queryset=Rol.objects.all())
  password = serializers.CharField(write_only=True)  # Asegurar que el campo de contraseña sea de escritura

  class Meta:
    model = CustomUser
    fields = [
      "id",
      "username",
      "nombre",
      "password",
      "rol",
      "is_active"
    ]

class CustomUserPasswordSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True)  # Solo para escritura

    class Meta:
        model = CustomUser
        fields = ['password'] 

class RolSerializer(serializers.ModelSerializer):
  class Meta:
    model = Rol
    fields = [
      "id",
      "nombre",
      "descripcion"
    ]
