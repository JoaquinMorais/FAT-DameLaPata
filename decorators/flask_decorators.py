from flask import Blueprint, session, abort, redirect, request,url_for,jsonify,render_template, g
from colorama import init as init_colorama, Fore as Color_colorama, Style as Style_colorama

from methods.response import Response
from models.models import User,Shelter,Adopter,Volunteer

def print_color(text, color):
    init_colorama()  # inicializa colorama
    #Negro      #Rojo
    #Verde      #Amarillo
    #Azul       #Morado
    #Cian       #Blanco
    try:
        print(color + text + Style_colorama.RESET_ALL)
    except:
        print('ERROR: Color nout found')
        print(text)

def mantenimiento(func):
    def response():
        print_color(f'La funcion {func.__name__} esta en mantenimiento!!',Color_colorama.RED)
        return render_template('mantenimiento.html')
    return response

def tryTo(func):
    def response():
        try:
            return func()
        except Exception as e:
            print_color(f'ERROR: {e}',Color_colorama.RED)
            return redirect(url_for('Login.profile'))
    return response

def fuckIt(func):
    def response():
        return ''
    return response


def login_is_required(SESSION,accepted_users = ['user','adopter','shelter','volunteer']):
    def decorator(function):
        def wrapper(*args, **kwargs):
            print(f'Someone use login_is_required: {function.__name__}')
            print(session)
            print([{x:SESSION[x]} for x in SESSION])
            print("user_id" in SESSION)
            if "user_id" in SESSION:
                user = User.query.get(SESSION['user_id'])
                if not user:
                    return Response(
                        'Error: User Not Found',
                        404
                    )
                if user.type in accepted_users:
                    return function()
                else:
                    return Response(
                        'Error: Unauthorized',
                        401
                    )
            else:
                return Response(
                    'Error: Unauthorized (user-id doesnt exists)',
                    402
                )
        return wrapper
    return decorator


