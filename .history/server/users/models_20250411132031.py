from django.db import models
from django.contrib.auth.models import AbstractUser

# Create your models here.

class User(AbstractUser):
    email = models.EmailField(unique=True)
    avatar = models.URLField(blank=True)
    bio = models.TextField(blank=True)
    is_active = models.BooleanField(default=True)

    USERNAME_FIELD = 'email'
    