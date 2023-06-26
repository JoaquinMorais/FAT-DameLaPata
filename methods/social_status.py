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

pets = str(input("Actualmente tiene mas de una mascota(y/n): "))
points = stone(pets, 10, 5, points)

pets = str(input("Has tenido alguna mascota(y/n): "))
points = stone(pets, 8, 5, points)

# Calcular estatus Casa

pets = str(input("¿Tiene patio o espacio abierto?(y/n): "))
points = stone(pets, 10, 3, points)

pets = str(input("¿Estas Casado?(y/n): "))
points = stone(pets, 8, 4, points)

pets = str(input("¿Tienes un título universitario?(y/n): "))
points = stone(pets, 6, 4, points)

pets = str(input("¿Tienes acceso a servicios de salud privados?(y/n): "))
points = stone(pets, 6, 2, points)

pets = str(input("¿Tu ocupación actual te permite vivir cómodamente?(y/n): "))
points = stone(pets, 10, 4, points)


print(points)
