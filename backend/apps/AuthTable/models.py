from django.db import models
from apps.Table.models import Table

class AuthTable(models.Model):
    mesa = models.OneToOneField(Table, on_delete=models.CASCADE, related_name="auth")
    pin_acceso = models.CharField(max_length=6)
    activo = models.BooleanField(default=True)

    def __str__(self):
        return f"Auth {self.mesa.nombre} - {self.pin_acceso}"
    
    class Meta:
        db_table = 'AUTHTABLE'
