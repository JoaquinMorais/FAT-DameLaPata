# Importaciones
from pickletools import long1
from geopy.geocoders import Nominatim
from geopy.distance import geodesic as GD
import time 
from datetime import datetime

# Importaciones para el dibujo
from mpl_toolkits.basemap.test import Basemap
import matplotlib.pyplot as plt 

# Variables y otros
geo = Nominatim(user_agent = "MyApp", timeout=3)
print(datetime.now())

# Un lugar a la vez
def OnePlace(place):
    loc = geo.geocode(place)
    print(loc)
    return loc.latitude, loc.longitude


# Varios lugares a la vez
def ManyPlaces():
    place_list = ["Sevilla", "Madrid", "Cordoba"]
    for i in place_list:
        address = geo.geocode(i, timeout=3)
        print('Ciudad: ' + i + " " + str(address.latitude) + " " + str(address.longitude))
        time.sleep(1)

# Distancia entre dos lugares
def Distance(coord_place_1, coord_place_2):
    distance = GD(coord_place_2, coord_place_1).km

    print(f"La distancia es {distance}.km")
    return distance

#print(datetime.now())