# Utiliza una imagen base de Python
FROM python:3.8

# Establece el directorio de trabajo en /app
WORKDIR /app

# Copia el archivo de la aplicación y el archivo de requisitos al contenedor
COPY  . /app 
COPY index.py .
COPY requirements.txt .

# Instala las dependencias de la aplicación
RUN pip install -r requirements.txt

# Expone el puerto 5000 en el contenedor
EXPOSE 5000

# Define la variable de entorno para que Flask sepa cómo encontrar la aplicación
ENV FLASK_APP=index.py

# Ejecuta la aplicación Flask
CMD ["flask", "run", "--host=0.0.0.0"]

