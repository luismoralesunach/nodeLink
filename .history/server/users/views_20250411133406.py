from django.shortcuts import render
from rest_framework import viewsets, permissions
from .serializers import UserSerializer, UserCreateSerializer
from .models import User
from rest_framework.response import Response
from rest_framework import status
from rest_framework.decorators import action



# Create your views here.
class UsersViewSets(viewsets.ModelViewSet):
    queryset = U