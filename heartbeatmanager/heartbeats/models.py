from django.db import models
from django.db.models.base import Model

class Heartbeat(models.Model):
  name = models.CharField(max_length=100)
  serialNumber = models.CharField(max_length=100)
  created_at = models.DateTimeField(auto_now_add=True)
  maxCapacity = models.IntegerField()
  currentCapacity = models.IntegerField()

