# Importaciones
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

# Distancia entre dos lugares
def Distance():
    place_1 = geo.geocode("Cordoba, Argentina")
    place_2 = geo.geocode("Buenos Aires, Argentina")

    coord_place_1 = (place_1.latitude, place_1.longitude)   
    coord_place_2 = (place_2.latitude, place_2.longitude)
    distance = GD(coord_place_2, coord_place_1).km

    print(f"La distancia entre {place_1} y {place_2} es {distance}.km")

# Dibujado de un lugar a la vez
def DrawnOnePlace():
    #place = geo.geocode("Cordoba, Argentina")
    plt.figure(figsize=(20,18))
    my_map=Basemap(projection='robin', lon_0=0, lat_0=0)
    my_map.drawcoastlines()
    my_map.drawcounties

DrawnOnePlace()
print(datetime.now())