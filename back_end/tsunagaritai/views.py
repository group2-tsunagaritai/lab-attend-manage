# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render
import django_filters
from rest_framework import viewsets, filters

from .models import User, tag, Labratory, Schedule, Log
from .serializer import UserSerializer, TagSerializer, LabratorySerializer, ScheduleSerializer, LogSerializer

class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    filter_fields = ('labratory',)


class TagViewSet(viewsets.ModelViewSet):
    queryset = tag.objects.all()
    serializer_class = TagSerializer

class LabratoryViewSet(viewsets.ModelViewSet):
    queryset = Labratory.objects.all()
    serializer_class = LabratorySerializer

class ScheduleViewSet(viewsets.ModelViewSet):
    queryset = Schedule.objects.all()
    serializer_class = ScheduleSerializer
    filter_fields = ('userid','labid')

class LogViewSet(viewsets.ModelViewSet):
    queryset = Log.objects.all()
    serializer_class = LogSerializer
    filter_fields = ('user','lab')