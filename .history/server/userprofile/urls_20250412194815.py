from django.urls import path, include
from .views import ProfileViewSets

profile_view = Pro

urlpatterns = [
    path('/<str:username>/', ProfileViewSets.as_view(), name='profile'),
]