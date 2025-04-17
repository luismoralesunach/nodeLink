from django.shortcuts import render
from rest_framework import viewsets, permissions
from .serializers import UserSerializer, UserCreateSerializer
from .models import User

# Create your views here.
