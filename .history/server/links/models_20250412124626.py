from django.db import models
from users.models import User


class Link(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='links')
    title = models.CharField(max_length=255)
    url = models.URLField()

    def
