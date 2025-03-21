from .models import Billiard
from .serializers import BilliardSerializer
from utils import transactionals

# Create your views here.
class BilliardViewSet(transactionals.ListCreateAPIView):
    queryset = Billiard.objects.all()
    serializer_class = BilliardSerializer