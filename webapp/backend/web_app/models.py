from django.db import models

# Create your models here.


class Bin(models.Model):

    """Model definition for MODELNAME."""

    # TODO: Define fields here
    bin_id = models.PositiveIntegerField(primary_key=True) 

    class Meta:
        """Meta definition for MODELNAME."""

        verbose_name = 'Bin ID '
        verbose_name_plural = 'Bin ID'

    def __str__(self):
        """Unicode representation of MODELNAME."""
        return str(self.bin_id)
    # TODO: Define custom methods here


class Location(models.Model):
    """Model definition for MODELNAME."""

    # TODO: Define fields here
    location_id = models.PositiveIntegerField(primary_key=True)
    location_name = models.CharField(max_length=200)
    latitude = models.CharField(max_length=200)
    longtitude = models.CharField(max_length=200)

    class Meta:
        """Meta definition for MODELNAME."""

        verbose_name = 'Location'
        verbose_name_plural = 'Location'

    def __str__(self):
        """Unicode representation of MODELNAME."""
        return str(self.location_id)


class Locate(models.Model):
    """Model definition for MODELNAME."""

    # TODO: Define fields here
    locate_id = models.PositiveIntegerField(primary_key=True)
    bin_id = models.ForeignKey(Bin, on_delete=models.SET_NULL, null=True)
    location_id = models.ForeignKey(Location, on_delete=models.SET_NULL, null=True)
    class Meta:
        """Meta definition for MODELNAME."""

        verbose_name = 'Locate'
        verbose_name_plural = 'Locate'

    def __str__(self):
        """Unicode representation of MODELNAME."""
        return str(self.locate_id)


class GarbageType(models.Model):
    """Model definition for GarbageType."""

    # TODO: Define fields here
    garbage_id = models.PositiveIntegerField(primary_key=True)
    garbage_name = models.CharField(max_length=200)

    class Meta:
        """Meta definition for GarbageType."""

        verbose_name = 'GarbageType'
        verbose_name_plural = 'GarbageType'

    def __str__(self):
        """Unicode representation of GarbageType."""
        return self.garbage_name


class Contain(models.Model):
    """Model definition for Contain."""

    # TODO: Define fields here
    contain_id = models.PositiveIntegerField(primary_key=True)
    garbage_id = models.ForeignKey(GarbageType, on_delete=models.SET_NULL, null=True)
    bin_id = models.ForeignKey(Bin, on_delete=models.SET_NULL, null=True)
    date_time_value = models.DateTimeField(auto_now=True)

    class Meta:
        """Meta definition for Contain."""

        verbose_name = 'Contain'
        verbose_name_plural = 'Contains'

    def __str__(self):
        """Unicode representation of Contain."""
        return str(self.date_time_value)

class Level(models.Model):
    """Model definition for Contain."""

    # TODO: Define fields here
    level_id = models.PositiveIntegerField(primary_key=True)
    garbage_id = models.ForeignKey(GarbageType, on_delete=models.SET_NULL, null=True)
    level = models.PositiveIntegerField()
    date_time_value = models.DateTimeField(auto_now=True)

    class Meta:
        """Meta definition for Level."""

        verbose_name = 'Level'
        verbose_name_plural = 'Levels'

    def __str__(self):
        """Unicode representation of Level."""
        return str(self.date_time_value)

class Maid(models.Model):
    """Model definition for MODELNAME."""

    # TODO: Define fields here
    maid_id = models.PositiveIntegerField(primary_key=True)
    maid_name = models.CharField(max_length=200)
    phone_number = models.CharField(max_length=200)

    class Meta:
        """Meta definition for MODELNAME."""
        verbose_name = 'Maid'
        verbose_name_plural = 'Maids'

    def __str__(self):
        """Unicode representation of MODELNAME."""
        return '%s %s %s' % (str(self.maid_id), self.maid_name, self.phone_number)


class Responsible(models.Model):
    """Model definition for MODELNAME."""

    # TODO: Define fields here
    responsible_id = models.PositiveIntegerField(primary_key=True)
    maid_id = models.ForeignKey(Maid, on_delete=models.SET_NULL, null=True)
    bin_id = models.ForeignKey(Bin, on_delete=models.SET_NULL, null=True)
    
    class Meta:
        """Meta definition for MODELNAME."""

        verbose_name = 'Responsible'
        verbose_name_plural = 'Responsibles'

    def __str__(self):
        """Unicode representation of MODELNAME."""
        return str(self.responsible_id)


class RegisteredUser(models.Model):
    """Model definition for MODELNAME."""

    # TODO: Define fields here

    user_id = models.PositiveIntegerField(primary_key=True)
    user_name = models.CharField(max_length=200)
    phone_number = models.CharField(max_length=200)
    
    class Meta:
        """Meta definition for MODELNAME."""

        verbose_name = 'RegisteredUser'
        verbose_name_plural = 'RegisteredUsers'

    def __str__(self):
        """Unicode representation of MODELNAME."""
        return str(self.user_id)


class Register(models.Model):
    """Model definition for MODELNAME."""

    # TODO: Define fields here
    register_id = models.PositiveIntegerField(primary_key=True)
    bin_id = models.ForeignKey(Bin, on_delete=models.SET_NULL, null=True)
    user_id = models.ForeignKey(RegisteredUser, on_delete=models.SET_NULL, null=True)

    class Meta:
        """Meta definition for MODELNAME."""
        verbose_name = 'Register'
        verbose_name_plural = 'Register'

    def __str__(self):
        """Unicode representation of MODELNAME."""
        return str(self.register_id)


class Message(models.Model):
    """Model definition for Message."""

    # TODO: Define fields here
    notification_id = models.PositiveIntegerField(primary_key=True)
    text = models.CharField(max_length=200)
    date_time_value = models.DateTimeField(auto_now=True)

    class Meta:
        """Meta definition for Message."""

        verbose_name = 'Message'
        verbose_name_plural = 'Message'

    def __str__(self):
        """Unicode representation of Message."""
        return str(self.notification_id)


class Send(models.Model):
    """Model definition for Send."""

    # TODO: Define fields here
    send_id = models.PositiveIntegerField(primary_key=True)
    notification_id = models.ForeignKey(Message, on_delete=models.SET_NULL, null=True)
    responsible_id = models.ForeignKey(Responsible, on_delete=models.SET_NULL, null=True)

    class Meta:
        """Meta definition for Send."""

        verbose_name = 'Send'
        verbose_name_plural = 'Send'

    def __str__(self):
        """Unicode representation of Send."""
        return str(self.send_id)