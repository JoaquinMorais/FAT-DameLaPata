# Usa la imagen oficial de Python como base
FROM python:3.9

# Establece el directorio de trabajo en /app
WORKDIR /app

# Copia los archivos necesarios a /app
COPY . /app

# Instala las dependencias de Python
RUN pip install -r requirements.txt

# Define el comando para ejecutar la aplicación Flask
CMD ["python3", "index.py"]