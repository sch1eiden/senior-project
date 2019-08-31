from django.shortcuts import render
from rest_framework import generics

from .models import GarbageType
from .serializers import GarbageTypeSerializer

class ListGarbage(generics.ListCreateAPIView):
    queryset = GarbageType.objects.all()
    serializer_class = GarbageTypeSerializer

class DetailGarbage(generics.RetrieveUpdateDestroyAPIView):
    queryset = GarbageType.objects.all()
    serializer_class = GarbageTypeSerializer