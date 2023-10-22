#!/bin/sh
python3 index.py &  # Inicia el servidor en segundo plano
sleep 10  # Espera 10 segundos
curl http://localhost:5000/db/populate  # Realiza una solicitud a la ruta