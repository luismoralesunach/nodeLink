from django.db import models
from users.models import User


class Link(models.Model):
    user = models.ForeignKey(User, on)
