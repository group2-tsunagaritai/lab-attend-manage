
from rest_framework import routers
from .views import UserViewSet, TagViewSet, LabratoryViewSet,ScheduleViewSet,LogViewSet

router = routers.DefaultRouter()
router.register(r'users', UserViewSet)
#router.register(r'tag', TagViewSet)
router.register(r'labratory', LabratoryViewSet)
router.register(r'Schedule', ScheduleViewSet)
router.register(r'Log', LogViewSet)