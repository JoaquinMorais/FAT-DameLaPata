from flask import Blueprint, jsonify, request
from models.models import User, Adopter
from utils.db import db
from methods.response import Response

# Crea un Blueprint
Close_account = Blueprint("Close_account", __name__)

@Close_account.route("/closeaccount/<int:id_user>", methods=['POST'])
#@login_is_required(session, accepted_users=['adopter','shelter','volunteer'])

def close_account(id_user):
    try:
        # Obtén el usuario con el ID proporcionado
        user = User.query.filter_by(id_user=id_user).first()

        if user:
            # Verifica si el usuario ya tiene el estado 2 (cuenta cerrada)
            if user.id_status == 2:
                return Response('La cuenta ya ha sido cerrada anteriormente.', 400)

            # Actualiza el estado del usuario a 2 (cuenta cerrada)
            user.id_status = 2
            db.session.commit()

            return Response('La cuenta ha sido cerrada exitosamente.', 200)
        else:
            return Response('El usuario no fue encontrado.', 404)
    except Exception as e:
        # Maneja cualquier excepción que pueda ocurrir durante la operación
        return Response(f'Error: {str(e)}', 500)
