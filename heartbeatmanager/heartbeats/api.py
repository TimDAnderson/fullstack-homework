from heartbeats.models import Heartbeat
from rest_framework import viewsets, permissions
from .serializers import HeartbeatSerializer

# Heartbeat Viewset
class HeartbeatViewset(viewsets.ModelViewSet):
  queryset = Heartbeat.objects.all()
  permission_classes = [
    permissions.AllowAny
  ]
  serializer_class = HeartbeatSerializer