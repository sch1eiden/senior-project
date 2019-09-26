from rest_framework import serializers
from .models import Bin, Location, Locate, GarbageType, Contain, Level, Maid, Responsible, RegisteredUser, Register, Message, Send

class BinSerializer(serializers.ModelSerializer):
    class Meta:
        fields = (
            'bin_id',
        )
        model = Bin

class LocationSerializer(serializers.ModelSerializer):
    class Meta:
        fields = (
            'location_id',
            'location_name',
            'latitude',
            'longtitude',
        )
        model = Location

class LocateSerializer(serializers.ModelSerializer):
    class Meta:
        fields = (
            'locate_id',
            'bin_id',
            'location_id',
        )
        model = Locate

class GarbageTypeSerializer(serializers.ModelSerializer):
    class Meta:
        fields = (
            'garbage_id',
            'garbage_name',
        )
        model = GarbageType

class ContainSerializer(serializers.ModelSerializer):
    class Meta:
        fields = (
            'contain_id',
            'garbage_id',
            'bin_id',
            'date_time_value',
        )
        model = Contain

class LevelSerializer(serializers.ModelSerializer):
    class Meta:
        fields = (
            'level_id',
            'garbage_id',
            'level',
            'date_time_value',
        )
        model = Level

class MaidSerializer(serializers.ModelSerializer):
    class Meta:
        fields = (
            'maid_id',
            'maid_name',
            'phone_number',
        )
        model = Maid

class ResponsibleSerializer(serializers.ModelSerializer):
    class Meta:
        fields = (
            'responsible_id',
            'maid_id',
            'bin_id',
        )
        model = Responsible

class RegisteredUserSerializer(serializers.ModelSerializer):
    class Meta:
        fields = (
            'user_id',
            'user_name',
            'phone_number',
        )
        model = RegisteredUser

class RegisterSerializer(serializers.ModelSerializer):
    class Meta:
        fields = (
            'register_id',
            'bin_id',
            'user_id',
        )
        model = Register

class MessageSerializer(serializers.ModelSerializer):
    class Meta:
        fields = (
            'notification_id',
            'text',
            'date_time_value',
        )
        model = Message

class SendSerializer(serializers.ModelSerializer):
    class Meta:
        fields = (
            'send_id',
            'notification_id',
            'responsible_id',
        )
        model = Send