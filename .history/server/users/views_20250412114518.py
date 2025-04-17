from django.shortcuts import render
from rest_framework import viewsets, permissions, status
from rest_framework.views import APIView
from rest_framework.si
from rest_framework.response import Response
from rest_framework.decorators import action
from .serializers import UserSerializer, UserCreateSerializer
from .models import User



# Create your views here.
class UsersViewSets(viewsets.ModelViewSet):
    queryset = User.objects.all()
    permission_classes = [permissions.AllowAny]

    def get_serializer_class(self):
        if self.action == 'create':
            return UserCreateSerializer
        return UserSerializer
    


