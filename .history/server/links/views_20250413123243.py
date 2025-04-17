from rest_framework import viewsets, permissions, status
from rest_framework.response import Response
from .permissions import IsOwnerOrReadOnly
from .serializers import LinksSerializer
from .models import Links

# Create your views here.

class LinksViewSets(viewsets.ModelViewSet):
    queryset = Links.objects.all()
    serializer_class = LinksSerializer
    permission_classes = [IsOwnerOrReadOnly]

    def get_queryset(self):
        if self.request.user.is_authenticated:
            return Links.objects.filter(user=self.request.user)
    
    def perform_create(self, serializer):
        serializer.save(user=self.request.user)
