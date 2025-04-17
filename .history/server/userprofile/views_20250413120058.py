from django.shortcuts import render
from .serializers import ProfileSerializer
from .models import Profile
from rest_framework import viewsets, permissions, status
from rest_framework.response import Response
from rest_framework.views import APIView
from django.shortcuts import get_object_or_404


# Create your views here.
class ProfileViewSets(viewsets.ModelViewSet):
    queryset = Profile.objects.all(
    permission_classes = [permissions.AllowAny]

    lookup_field = 'user__username'

    def retrieve(self, request, *args, **kwargs):
        username = kwargs.get('username')
        profile = get_object_or_404(Profile, user__username=username)
        serializer = self.get_serializer(profile)
        return Response(serializer.data)

    def get_serializer_class(self):
        if self.action == 'create':
            return ProfileSerializer
        return ProfileSerializer