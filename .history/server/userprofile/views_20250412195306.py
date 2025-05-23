from django.shortcuts import render
from .serializers import ProfileSerializer
from .models import Profile
from rest_framework import viewsets, permissions, status
from rest_framework.views import APIView


# Create your views here.
class ProfileViewSets(viewsets.ModelViewSet):
    queryset = Profile.objects.all()
    permission_classes = [permissions.AllowAny]

    lookup_field = 'user__username'

    def r

    def get_serializer_class(self):
        if self.action == 'create':
            return ProfileSerializer
        return ProfileSerializer