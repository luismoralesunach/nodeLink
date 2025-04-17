from django.urls import path, include
from .views import ProfileViewSets

urlpatterns = [
    path('/<str:username>/', ProfileViewSets.as_view(), name='profile'), )
]