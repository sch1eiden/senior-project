from django.contrib import admin
from web_app.models import Bin, Locate, Location, GarbageType, Contain, Maid, Responsible, RegisteredUser, Register, Message, Send
# Register your models here.

class PostLocate(admin.ModelAdmin):
    list_display = ('locate_id', 'bin_id', 'location_id')
    list_filter = ('locate_id', 'bin_id', 'location_id')

class PostLocation(admin.ModelAdmin):
    list_display = ('location_id', 'location_name', 'latitude', 'longtitude')
    list_filter = ('location_id', 'location_name', 'latitude', 'longtitude')
    # search_fields = ('garbage_id', 'locatoin_name', 'latitude', 'longtitude')

class PostGarbageType(admin.ModelAdmin):
    list_display = ('garbage_id', 'garbage_name')
    list_filter = ('garbage_id', 'garbage_name')

class PostContain(admin.ModelAdmin):
    list_display = ('contain_id', 'garbage_id', 'bin_id', 'amount', 'level', 'date_time_value')
    list_filter = ('contain_id', 'garbage_id', 'bin_id', 'amount', 'level', 'date_time_value')

class PostMaid(admin.ModelAdmin):
    list_display = ('maid_id', 'maid_name', 'phone_number')
    list_filter = ('maid_id', 'maid_name', 'phone_number')

class PostResponsible(admin.ModelAdmin):
    list_display = ('responsible_id', 'maid_id', 'bin_id')
    list_filter = ('responsible_id', 'maid_id', 'bin_id')

class PostRegisteredUser(admin.ModelAdmin):
    list_display = ('user_id', 'user_name', 'phone_number')
    list_filter = ('user_id', 'user_name', 'phone_number')

class PostRegister(admin.ModelAdmin):
    list_display = ('register_id', 'bin_id', 'user_id')
    list_filter = ('register_id', 'bin_id', 'user_id')

class PostMessage(admin.ModelAdmin):
    list_display = ('notification_id', 'text', 'date_time_value')
    list_filter = ('notification_id', 'text', 'date_time_value')

class PostSend(admin.ModelAdmin):
    list_display = ('send_id', 'notification_id', 'responsible_id')
    list_filter = ('send_id', 'notification_id', 'responsible_id')


admin.site.register(Bin)
admin.site.register(Locate, PostLocate)
admin.site.register(Location, PostLocation)
admin.site.register(GarbageType, PostGarbageType)
admin.site.register(Contain, PostContain)
admin.site.register(Maid, PostMaid)
admin.site.register(Responsible, PostResponsible)
admin.site.register(RegisteredUser, PostRegisteredUser)
admin.site.register(Register, PostRegister)
admin.site.register(Message, PostMessage)
admin.site.register(Send, PostSend)