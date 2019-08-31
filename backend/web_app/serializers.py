from rest_framework import serializers
from .models import GarbageType


class GarbageTypeSerializer(serializers.ModelSerializer):
    class Meta:
        fields = (
            'garbage_id',
            'garbage_name',
        )
        model = GarbageType