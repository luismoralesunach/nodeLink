from django.db import models
from user.models import User


class Profile(models.Model):
    user = models.One
