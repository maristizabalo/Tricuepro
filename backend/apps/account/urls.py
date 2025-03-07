from django.urls import path
from .views import MyTokenObtainPairView, UserList, RolList, UserDetail, UserPasswordView

from rest_framework_simplejwt.views import (
    TokenRefreshView,
)

urlpatterns = [
    path('token/', MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('user/', UserList.as_view(), name='user'),
    path('rol/', RolList.as_view(), name='rol'),
    path('user/<int:pk>/', UserDetail.as_view(), name='user-detail'),
    path('user/password/<int:pk>/', UserPasswordView.as_view(), name='user-change-password'),
]