from rest_framework import viewsets, permissions, status
from rest_framework.response import Response
from .permissions import IsOwnerOrReadOnly
from .serializers import LinksSerializer
from .models import Links

# Create your views here.

class LinksViewSets(viewsets.ModelViewSet):
    queryset = Links.objects.all()
    serializer_class = LinksSerializer
 
