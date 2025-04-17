from django.shortcuts import render
from .serializers import ProfileSerializer, 
from rest_framework import viewsets, permissions, status
from rest_framework.views import APIView


# Create your views here.
class ProfileViewSets(viewsets.ModelViewSet):
    # queryset = User.objects.all()
    permission_classes = [permissions.AllowAny]

    def get_serializer_class(self):
        if self.action == 'create':
            return UserCreateSerializer
        return UserSerializer