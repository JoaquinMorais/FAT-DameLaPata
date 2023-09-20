from flask import url_for,session
from app import app
import requests

def requests_flask(url):
    with app.app_context:
        session_requests = requests.Session()
        response = session.get(url)

    # Puedes acceder a la respuesta como JSON
    return response.json()