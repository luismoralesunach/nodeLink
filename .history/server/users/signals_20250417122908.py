from django.db.models.signals import post_save
from django.dispatch import receiver
from .models import User
from user.models import Profile  # adjust path if your app is named differently

@receiver(post_save, sender=User)
def create_profile_for_new_user(sender, instance, created, **kwargs):
    if created:
        Profile.objects.create(user=instance)
