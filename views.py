from django.shortcuts import render
from rest_framework import generics, permissions
from django.contrib.auth import get_user_model
from .models import Interest
from .serializers import UserSerializer, InterestSerializer

User = get_user_model()

class UserListView(generics.ListAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [permissions.IsAuthenticated]

class InterestCreateView(generics.CreateAPIView):
    queryset = Interest.objects.all()
    serializer_class = InterestSerializer
    permission_classes = [permissions.IsAuthenticated]

class InterestListView(generics.ListAPIView):
    serializer_class = InterestSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        return Interest.objects.filter(receiver=self.request.user)
