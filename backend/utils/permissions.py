from rest_framework.permissions import BasePermission
from apps.account.models import CustomUser


def check_user_permissions(permissions, user, obj=None):
    if isinstance(user, CustomUser):
        if user.rol.id:
                if user.rol.id in permissions:
                    return True
        return False
    return False



class CheckPermissions(BasePermission):

  def __init__(self, permissions):
    super().__init__()
    self.permissions = permissions

  def has_permission(self, request, view):
    return check_user_permissions(self.permissions, request.user)

  def has_object_permission(self, request, view, obj):
    return check_user_permissions(self.permissions, request.user, obj)
