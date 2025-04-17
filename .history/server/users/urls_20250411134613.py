from django.urls import path
from rest_framework.routers import DefaultRouter
from .views import UsersViewSet

router = DefaultRouter()
router.register(r'users', UserViewSet, basename='user')

urlpatterns = router.urls
