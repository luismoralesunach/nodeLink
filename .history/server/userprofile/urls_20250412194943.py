from django.urls import path, include
from .views import ProfileViewSets

profile_view = ProfileViewSets.as_view({'get': 'retrieve'})

urlpatterns = [
    path('<str:username>/', profile_view, name='profile'),
]