from rest_framework import serializers
from .models import User 


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'email', 'is_active', 'username', 'first_name', 'last_name', 'join_date']
        read_only_fields = ['id']
        

class UserCreateSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['email', 'password', ]
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
        return user