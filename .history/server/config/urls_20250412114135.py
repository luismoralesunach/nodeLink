from django.contrib import admin
from rest_framework.simplejwt.views import TokenObtainPairView, TokenRefreshView

from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('users/', include('users.urls')),  # Make sure this is correct
]
