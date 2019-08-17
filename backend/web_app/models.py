from django.db import models

# Create your models here.
class GarbageType(models.Model):
    garbageId = models.IntegerField(primary_key=True)
    garbageName = models.CharField(max_length=255)

class Bin(models.Model):
    binId = models.IntegerField(primary_key=True)

class Contain(models.Model):
    garbageId = models.ForeignKey(GarbageType, on_delete=models.CASCADE)
    binId = models.ForeignKey(Bin, on_delete=models.CASCADE)
    amount = models.IntegerField()
    Level = models.IntegerField()

