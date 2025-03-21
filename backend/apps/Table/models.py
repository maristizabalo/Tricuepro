from django.db import models
from apps.Billiard.models import Billiard

class Table(models.Model):

    nombre = models.CharField(max_length=50)
    billar = models.ForeignKey(Billiard, on_delete=models.CASCADE, related_name="mesas")
    estado = models.BooleanField(default=False)
    tipo = models.CharField(max_length=10)

    def __str__(self):
        return f"{self.nombre} ({self.billar.nombre})"

    class Meta:
        db_table = 'TABLE'
