from django.urls import path
from .views import BilliardViewSet

urlpatterns = [
    path('billiards/', BilliardViewSet.as_view(), name='billiards')
]