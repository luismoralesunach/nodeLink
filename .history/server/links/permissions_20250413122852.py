from rest_framework import permissions

class IsOwnerOrReadOnly(permissions.BasePermission):

    def has_permission(self, )