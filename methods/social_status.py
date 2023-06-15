# La idea es calcular el estatus con varias preguntas y segun la respuesta sume determinados puntos para despues
# sacar una conclusion...
rate = 0

# Calcular estatus Sueldo
ingreso = int(input("Ingresos aproximado: "))
if ingreso >= 150000:
    rate += 10
elif ingreso <= 75000:
    rate += 5
else:
    rate += 1

# Calcular estatus Casa
