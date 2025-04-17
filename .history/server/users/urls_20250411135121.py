from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import UsersViewSets

router = DefaultRouter()
router.register(r'users', UsersViewSets, basename='user')

urlpatterns = [
    path('', include(router.urls)),
]
