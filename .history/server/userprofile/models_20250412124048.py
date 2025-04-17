from django.db import models
from user.models import User


class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, related_name='profile')
    bio = models.TextField(blank=True, null=True)
    avatar = models.TextField(blank=True, null=True)
    background_color = models.CharField(max_length=7, default='#FFFFFF')  # Default to white
    bio_text_color
