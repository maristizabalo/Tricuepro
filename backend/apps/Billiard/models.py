from django.db import models
from apps.account.models import CustomUser

class Billard(models.Model):
    nombre = models.CharField(max_length=100)
    direccion = models.TextField()
    propietarios = models.ManyToManyField(CustomUser, related_name="billares", limit_choices_to={'rol': 'owner'})
    admin = models.OneToOneField(CustomUser, on_delete=models.SET_NULL, null=True, blank=True, related_name="administra", limit_choices_to={'rol': 'admin'})

    def __str__(self):
        return self.nombre