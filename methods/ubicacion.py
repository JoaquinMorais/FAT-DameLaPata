from geopy.geocoders import Nominatim
import time 
import math

#Nominatim
geo = Nominatim(user_agent = "MyApp")

loc = geo.geocode("Madrid")
print(loc)