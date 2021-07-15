from rest_framework import serializers
from heartbeats.models import Heartbeat

# Heartbeat Serializer
class HeartbeatSerializer(serializers.ModelSerializer):
  class Meta:
    model = Heartbeat
    fields = '__all__'