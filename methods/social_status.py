# La idea es calcular el estatus con varias preguntas y segun la respuesta sume determinados puntos para despues
# sacar una conclusion...
points = 0

# Calcular estatus Sueldo
income = int(input("Ingresos aproximado(Ej: 150000): "))
if income >= 150000:
    points += 10
elif income <= 75000:
    points += 1
else:
    points += 5

# Tiene mas mascotas???
def stone(pet, sum1, sum2, points):
    if pet == "y":
        points += sum1
    else:
        points += sum2
    return points


pets = str(input("Tiene mas mascotas(y/n): "))
points = stone(pets, 10, 5, points)

pets = str(input("Has tenido alguna mascota(y/n): "))
points = stone(pets, 15, 5, points)

# Calcular estatus Casa


print(points)