from .views import LinksViewSets
from django.urls import path


urlpatterns = [
    path('', LinksViewSets.as_view({'get': 'list', 'post': 'create'}), name='links-list'),
    path('<int:pk>/', LinksViewSets.as_view({'get': 'retrieve', 'put': 'update', 'delete': 'destroy'}), name='links-detail'),
]



