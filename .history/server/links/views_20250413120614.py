from django.shortcuts import render
from rest_framework import viewsets, permissions, status
from rest_framework.response import Response
from .serializers import LinksSerializer
from .models import Links

# Create your views here.

class LinksViewSets(viewsets.ModelViewSet):
    queryset = Links.objects.all()
    serializer_class = LinksSerializer
    permission_classes = [permissions.AllowAny]

    def get_queryset(self):
        return Links.objects.filter(user = s)
