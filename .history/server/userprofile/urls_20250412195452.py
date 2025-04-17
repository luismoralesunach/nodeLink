# profile/urls.py
from django.urls import path
from .views import ProfileViewSets

urlpatterns = [
    path('<str:username>/', ProfileViewSets.as_view({'get': 'retrieve'}), name='profile-detail'),
]

