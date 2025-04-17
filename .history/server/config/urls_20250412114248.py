from django.contrib import admin
from rest_framework.simplejwt.views import TokenObtainPairView, TokenRefreshView, TokenVerifyView
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/token/', TokenObtainPairView.as_view(),name='token_obtain_pair'),
    path('users/', include('users.urls')),  # Make sure this is correct
]
