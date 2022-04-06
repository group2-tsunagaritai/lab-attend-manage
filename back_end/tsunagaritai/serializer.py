# coding: utf-8

from asyncio.base_subprocess import WriteSubprocessPipeProto
from dataclasses import field, fields
from pyexpat import model
from rest_framework import serializers

from .models import User, tag, Laboratory, Schedule, Log
from drf_writable_nested.serializers import WritableNestedModelSerializer

class UserSerializer(WritableNestedModelSerializer):
    class Meta:
        model = User
        fields = ('name', 'mail','field')

class TagSerializer(WritableNestedModelSerializer):
    class Meta:
        model = tag
        fields = ('tag_id')

class LabratorySerializer(WritableNestedModelSerializer):
    class Meta:
        model = Laboratory
        fields = ('labaratory_name', 'member')

class ScheduleSerializer(WritableNestedModelSerializer):
    class Meta:
        model = Schedule
        fields = ('enter','exit','userid','exitid')

class LogSerializer(WritableNestedModelSerializer):
    class Meta:
        model = Log
        fields = ('user','lab','enter','exit')