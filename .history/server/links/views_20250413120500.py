from django.shortcuts import render
from rest_framework import viewsets, permissions, status
from rest_framework.response import Response
from .serializers import LinksSerializer
from .models import Links

# Create your views here.
