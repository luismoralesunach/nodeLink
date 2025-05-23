from django.urls import path, include
from .views import ProfileViewSets

profile_view = ProfileViewSets.as_view({'get'})

urlpatterns = [
    path('/<str:username>/', ProfileViewSets.as_view(), name='profile'),
]