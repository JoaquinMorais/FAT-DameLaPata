# La idea es calcular el estatus con varias preguntas y segun la respuesta sume determinados puntos para despues
# sacar una conclusion...
rate = 0.0

# Calcular estatus Sueldo
ingreso = int(input("Ingresos aproximado: "))
if ingreso >= 150000:
    rate += 1.5
elif ingreso <= 75000:
    rate += 0.5
else:
    rate += 1

print(rate)

# Calcular estatus Casa