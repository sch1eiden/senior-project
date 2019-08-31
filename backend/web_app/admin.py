from django.contrib import admin
from web_app.models import Bin, Locate, Location, GarbageType, Maid, Responsible, RegisteredUser, Register, Message, Send
# Register your models here.

admin.site.register(Bin)
admin.site.register(Locate)
admin.site.register(Location)
admin.site.register(GarbageType)
admin.site.register(Maid)
admin.site.register(Responsible)
admin.site.register(RegisteredUser)
admin.site.register(Register)
admin.site.register(Message)
admin.site.register(Send)

