from geopy.geocoders import Nominatim
import time 
import math

geo = Nominatim(user_agent = "MyApp")

# Un lugar a la vez
def OnePlace():
    place = input("Dime un lugar: ")
    loc = geo.geocode(place)
    print(loc)
    print("Lat:", loc.latitude, "Lon:", loc.longitude)

# Varios lugares a la vez
def ManyPlaces():
    place_list = ["Sevilla", "Madrid", "Cordoba"]
    for i in place_list:
        address = geo.geocode(i, timeout=3)
        print('Ciudad: ' + i + " " + str(address.latitude) + " " + str(address.longitude))
        time.sleep(1)

