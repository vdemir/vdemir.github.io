#the_weather/weather/urls.py

from django.urls import path

from . import views

urlpatterns = [
    path('', views.index),  #the path for our index view
]