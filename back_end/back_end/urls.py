"""back_end URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/1.11/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  url(r'^$', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  url(r'^$', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.conf.urls import url, include
    2. Add a URL to urlpatterns:  url(r'^blog/', include('blog.urls'))
"""
from django.urls import path,include
from django.contrib import admin
from tsunagaritai.urls import router as tsunagaritai_router
from rest_framework_jwt.views import obtain_jwt_token # JWT認証のために追加

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/',include(tsunagaritai_router.urls)),
    path('api-auth/', obtain_jwt_token), # 認証のためのURL
]
