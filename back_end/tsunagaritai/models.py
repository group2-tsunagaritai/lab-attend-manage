# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from dataclasses import field
from statistics import mode
from telnetlib import STATUS
from django.db import models

class tag(models.Model):
    STATUS_TAG = "0"
    STATUS_VISION = "1"
    STATUS_AI = "2"
    STATUS_ROB = "3"
    STATUS_WEB = "4"
    STATUS_SET = (
            (STATUS_TAG,"---"),
            (STATUS_VISION, "ビジョン"),
            (STATUS_AI, "AI"),
            (STATUS_ROB,"ロボティクス"),
            (STATUS_WEB,"Web")
    )    

class User(models.Model):
    name = models.CharField(max_length=32)
    mail = models.EmailField()
    field = models.CharField(choices=tag.STATUS_SET, default=tag.STATUS_TAG,max_length=8)
    x = models.FloatField()
    y = models.FloatField()
    STATUS_LABRATORY = "0"
    STATUS_ADMINISTRAROR = "1"
    STATUS_MEMBER = "2"
    STATUS_SET = (
            (STATUS_LABRATORY,"---"),
            (STATUS_ADMINISTRAROR, "管理者"),
            (STATUS_MEMBER, "メンバー"),
    )
    field2 = models.CharField(choices=STATUS_SET,default=STATUS_LABRATORY,max_length=8)
    def __repr__(self):
        return "{}:{}".format(self.pk,self.name)
    __str__ = __repr__

class Labratory(models.Model):
    labratory_name = models.CharField(max_length=32)
    member = models.ManyToManyField(User,verbose_name='所属メンバー')
    def __repr__(self):
        return "{}:{}".format(self.pk,self.labratory_name)
    __str__ = __repr__

class Schedule(models.Model):
    enter = models.DateTimeField(auto_created=True)
    exit = models.DateTimeField(auto_created=True)
    userid = models.ManyToManyField(User,verbose_name='ユーザID')
    labid = models.ManyToManyField(Labratory,verbose_name='研究室ID')

    def __repr__(self):
        return "{}".format(self.pk)
    __str__ = __repr__

class Log(models.Model):
    user = models.ForeignKey(User,related_name='users',on_delete=models.CASCADE)
    lab = models.ForeignKey(Labratory,related_name='labratory',on_delete=models.CASCADE)
    enter = models.DateTimeField(auto_created=True)
    exit = models.DateTimeField(auto_created=True)

    def __repr__(self):
        return "{}".format(self.pk)
    __str__ = __repr__