from django.shortcuts import render
from rest_framework import viewsets, permissions
from .serializers import UserSerializer, UserCreateSerializer
from .models import User
from rest_framework.response import Response


# Create your views here.
