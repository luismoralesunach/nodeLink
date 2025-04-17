# urls.py
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import UsersViewSets, CustomLoginView

router = DefaultRouter()
router.register(r'users', UsersViewSets, basename='user')

urlpatterns = [
    path('=/', include(router.urls)),  # Changed base URL to avoid any conflict
    path('login/', CustomLoginView.as_view(), name='login'),
]
