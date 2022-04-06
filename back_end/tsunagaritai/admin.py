# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.contrib import admin

from .models import User, tag, Labratory, Schedule, Log

@admin.register(User)
class UserAdmin(admin.ModelAdmin):
    pass

@admin.register(tag)
class TagAdmin(admin.ModelAdmin):
    pass

@admin.register(Labratory)
class LaboratoryAdmin(admin.ModelAdmin):
    pass

@admin.register(Schedule)
class ScheduleAdmin(admin.ModelAdmin):
    pass

@admin.register(Log)
class LogAdmin(admin.ModelAdmin):
    pass
