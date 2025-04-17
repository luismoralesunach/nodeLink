from rest_framework import serializers
from .models import User 


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'email', 'avatar', 'bio', 'is_active']
        read_only_fields = ['id']
        

class UserCreateSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['email', 'password', 'avatar', 'bio']
        extra_kwargs = {
            'password': {'write_only': True}
        }

    def create(self, validated_data):
        user = User.objects.create_user(
            email=validated_data['email'],
            password=validated_data['password'],
            avatar=validated_data.get('avatar', ''),
            bio=validated_data.get('bio', '')
        )