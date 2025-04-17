from django.db import models
# from users.models import User
from userprofile.models import Profile


class Links(models.Model):
    # profile = models.ForeignKey(Profile, on_delete=models.CASCADE, related_name='links')
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='links')
    title = models.CharField(max_length=255)
    url = models.URLField()

    def __str__(self):
        return f"{self.title} - {self.user.email}"
