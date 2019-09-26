import django_filters.rest_framework
from rest_framework import filters
from django.shortcuts import render
from rest_framework import generics
from .models import Bin, Location, Locate, GarbageType, Contain, Level, Maid, Responsible, RegisteredUser, Register, Message, Send
from .serializers import BinSerializer, LocationSerializer, LocateSerializer, GarbageTypeSerializer, ContainSerializer, LevelSerializer, MaidSerializer, ResponsibleSerializer, RegisteredUserSerializer, RegisterSerializer, MessageSerializer, SendSerializer

def index(request):
    template = 'index.html'
    return render(request, template)
# Bin
class ListBin(generics.ListCreateAPIView):
    queryset = Bin.objects.all()
    serializer_class = BinSerializer

class DetailBin(generics.RetrieveUpdateDestroyAPIView):
    queryset = Bin.objects.all()
    serializer_class = BinSerializer

# Location
class ListLocation(generics.ListCreateAPIView):
    queryset = Location.objects.all()
    serializer_class = LocationSerializer

class DetailLocation(generics.RetrieveUpdateDestroyAPIView):
    queryset = Location.objects.all()
    serializer_class = LocationSerializer

# Locate
class ListLocate(generics.ListCreateAPIView):
    queryset = Locate.objects.all()
    serializer_class = LocateSerializer

class DetailLocate(generics.RetrieveUpdateDestroyAPIView):
    queryset = Locate.objects.all()
    serializer_class = LocateSerializer

# GarbageType
class ListGarbage(generics.ListCreateAPIView):
    queryset = GarbageType.objects.all()
    serializer_class = GarbageTypeSerializer

class DetailGarbage(generics.RetrieveUpdateDestroyAPIView):
    queryset = GarbageType.objects.all()
    serializer_class = GarbageTypeSerializer

# Contain
class ListContain(generics.ListCreateAPIView):
    queryset = Contain.objects.all()
    serializer_class = ContainSerializer
    filter_backends = [django_filters.rest_framework.DjangoFilterBackend, filters.OrderingFilter]
    ordering_fields = ['date_time_value']
    filterset_fields = ['garbage_id']

class DetailContain(generics.RetrieveUpdateDestroyAPIView):
    queryset = Contain.objects.all()
    serializer_class = ContainSerializer

# Level
class ListLevel(generics.ListCreateAPIView):
    queryset = Level.objects.all()
    serializer_class = LevelSerializer
    filter_backends = [django_filters.rest_framework.DjangoFilterBackend, filters.OrderingFilter]
    ordering_fields = ['date_time_value']
    filterset_fields = ['garbage_id']

class DetailLevel(generics.RetrieveUpdateDestroyAPIView):
    queryset = Level.objects.all()
    serializer_class = LevelSerializer

# Maid
class ListMaid(generics.ListCreateAPIView):
    queryset = Maid.objects.all()
    serializer_class = MaidSerializer

class DetailMaid(generics.RetrieveUpdateDestroyAPIView):
    queryset = Maid.objects.all()
    serializer_class = MaidSerializer

# Responsible
class ListResponsible(generics.ListCreateAPIView):
    queryset = Responsible.objects.all()
    serializer_class = ResponsibleSerializer

class DetailResponsible(generics.RetrieveUpdateDestroyAPIView):
    queryset = Responsible.objects.all()
    serializer_class = ResponsibleSerializer

# RegisteredUser
class ListRegisteredUser(generics.ListCreateAPIView):
    queryset = RegisteredUser.objects.all()
    serializer_class = RegisteredUserSerializer

class DetailRegisteredUser(generics.RetrieveUpdateDestroyAPIView):
    queryset = RegisteredUser.objects.all()
    serializer_class = RegisteredUserSerializer

# Register
class ListRegister(generics.ListCreateAPIView):
    queryset = Register.objects.all()
    serializer_class = RegisterSerializer

class DetailRegister(generics.RetrieveUpdateDestroyAPIView):
    queryset = Register.objects.all()
    serializer_class = RegisterSerializer

# Message
class ListMessage(generics.ListCreateAPIView):
    queryset = Message.objects.all()
    serializer_class = MessageSerializer

class DetailMessage(generics.RetrieveUpdateDestroyAPIView):
    queryset = Message.objects.all()
    serializer_class = MessageSerializer

# Send
class ListSend(generics.ListCreateAPIView):
    queryset = Send.objects.all()
    serializer_class = SendSerializer

class DetailSend(generics.RetrieveUpdateDestroyAPIView):
    queryset = Send.objects.all()
    serializer_class = SendSerializer