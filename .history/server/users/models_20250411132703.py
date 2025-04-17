from django.db import models
from django.contrib.auth.models import AbstractUser, P

# Create your models here.

class User(AbstractUser):
    email = models.EmailField(unique=True)
    avatar = models.URLField(blank=True)
    bio = models.TextField(blank=True)
    is_active = models.BooleanField(default=True)

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = []

    def __str__(self):
        return self.email