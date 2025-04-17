from django.db import models
from users.models import User


class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, related_name='profile')
    bio = models.TextField(blank=True, null=True, default="")
    avatar = models.TextField(blank=True, null=True)
    background_color = models.CharField(max_length=7, default='#FFFFFF')  
    bio_text_color = models.CharField(max_length=7, default="#000000")
    link_color = models.CharField(max_length=7, default="#0000FF")

    def __str__(self):
        return f"{self.user.email}'s Profile"
