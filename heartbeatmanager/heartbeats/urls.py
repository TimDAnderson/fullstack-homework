from rest_framework import routers, urlpatterns
from .api import HeartbeatViewset

router = routers.DefaultRouter()
router.register('api/heartbeats', HeartbeatViewset, 'heartbeats')

urlpatterns = router.urls