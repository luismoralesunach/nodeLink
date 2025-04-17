from rest_framework import serializers
from .models import User 


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'email', 'avatar', 'bio', 'is_active']
        read_only_fields = ['id']
        

class UserCreateSerializer(serializers.ModelSerializer):
    