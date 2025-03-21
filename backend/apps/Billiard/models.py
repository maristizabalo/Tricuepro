from django.db import models
from apps.account.models import CustomUser

class Billiard(models.Model):
    nombre = models.CharField(max_length=100)
    direccion = models.TextField()
    propietarios = models.ManyToManyField(CustomUser, related_name="billares")
    admin = models.OneToOneField(CustomUser, on_delete=models.SET_NULL, null=True, blank=True)
    

    def __str__(self):
        return self.nombre
    
    class Meta:
        db_table = 'BILLARD'
