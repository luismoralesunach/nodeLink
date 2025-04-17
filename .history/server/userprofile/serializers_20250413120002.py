from rest_framework import serializers
from .models import Profile
from links.serializers import LinksSerializer

class ProfileSerializer(serializers.ModelSerializer):

    links = LinksSerializer(many=True, read_only=True)
    class Meta:
        model = Profile
        fields = ['id', 'user', 'bio', 'avatar', 'bio_text_color', 'background_color', 'link_color', 'links']