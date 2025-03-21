from rest_framework import serializers
from .models import Billiard

class BilliardSerializer(serializers.ModelSerializer):
    class Meta:
        model = Billiard
        fields = '__all__'