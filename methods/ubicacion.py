# Importaciones
from socket import timeout
from geopy.geocoders import Nominatim
from geopy.distance import geodesic
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

# Distancia entre dos lugares
def Distance():
    Cordoba = geo.geocode("Cordoba, Argentina")
    Rosario = geo.geocode("Rosario, Argentina")
    print(Cordoba + Rosario)
    '''
    coord_Cordoba = (Cordoba.latidude, Cordoba.longitude)
    coord_Rosario = (Rosario.latidude, Rosario.longitude)

    #distance = geodesic(coord_Cordoba, coord_Rosario).km
    print("La distancia entre " + Cordoba + " y " + Rosario + " es " + geodesic(coord_Cordoba, coord_Rosario).km)
'''
Distance()