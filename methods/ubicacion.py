from geopy.geocoders import Nominatim
import time 
import math

geo = Nominatim(user_agent = "MyApp")

place = input("Dime un lugar: ")
loc = geo.geocode(place)
print(loc)
print("Lat:", loc.latitude, "Lon:", loc.longitude)