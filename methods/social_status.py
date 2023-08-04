# La idea es calcular el estatus con varias preguntas y segun la respuesta sume determinados puntos para despues
# sacar una conclusion...
points = 0
result = 0

# Calcular estatus Sueldo
income = int(input("Ingresos aproximado(Ej: 150000): "))
if income >= 150000:
    points += 10
elif income <= 75000:
    points += 2
else:
    points += 5

# Funcion default de calculo
def stone(pet, sum1, sum2, points):
    if pet == "y":
        points += sum1
    else:
        points += sum2
    return points

# Tiene mas mascotas???
pets = str(input("¿Actualmente tiene mas de una mascota?(y/n): "))
points = stone(pets, 10, 5, points)

pets = str(input("¿Has tenido mascotas antes?(y/n): "))
points = stone(pets, 8, 5, points)

# Calcular estatus Casa
pets = str(input("¿Tienes el espacio adecuado en tu hogar para albergar a la mascota de forma segura y cómoda?(y/n): "))
points = stone(pets, 8, 3, points)

pets = str(input("¿Estas Casado?(y/n): "))
points = stone(pets, 6, 4, points)

pets = str(input("¿Tienes el secundario completado?(y/n): "))
points = stone(pets, 6, 2, points)

pets = str(input("¿Tienes acceso a servicios de salud privados?(y/n): "))
points = stone(pets, 8, 4, points)

pets = str(input("¿Tu ocupación actual te permite vivir cómodamente?(y/n): "))
points = stone(pets, 9, 3, points)

pets = str(input("¿Tienes los recursos necesarios para mantener todas las necesidades de la mascota?(y/n): "))
points = stone(pets, 10, 2, points)

# Calculos finales (max= 75;min= 30) (1=Bueno, 2=Mediocre, 3=Malo)
def final_calculation():
    if points >= 60:
        result = 1
    elif points <= 45:
        result = 3
    else:
        result = 2
    print(result)

final_calculation()