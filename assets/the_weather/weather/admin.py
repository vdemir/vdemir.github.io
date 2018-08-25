from django.contrib import admin

# Register your models here.
#the_weather/weather/admin.py

from django.contrib import admin
from .models import City

admin.site.register(City)