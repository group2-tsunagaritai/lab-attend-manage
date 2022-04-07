# coding: utf-8

from asyncio.base_subprocess import WriteSubprocessPipeProto
from dataclasses import field, fields
from pyexpat import model
from rest_framework import serializers

from .models import User, tag, Labratory, Schedule, Log
from drf_writable_nested.serializers import WritableNestedModelSerializer

class UserSerializer(WritableNestedModelSerializer):
    class Meta:
        model = User
        fields = ('id','name', 'mail','field','status','x','y','labratory','attend')

class TagSerializer(WritableNestedModelSerializer):
    class Meta:
        model = tag
        fields = ('tag_id',)

class LabratorySerializer(WritableNestedModelSerializer):
    class Meta:
        model = Labratory
        fields = ('labratory_name',)

class ScheduleSerializer(WritableNestedModelSerializer):
    class Meta:
        model = Schedule
        fields = ('id','enter','exit','userid','labid')

class LogSerializer(WritableNestedModelSerializer):
    class Meta:
        model = Log
        fields = ('user','lab','enter','exit')