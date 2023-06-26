from flask import Blueprint, session, abort, redirect, request,url_for,jsonify,render_template, g
from colorama import init as init_colorama, Fore as Color_colorama, Style as Style_colorama


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


def login_is_required(function):
    def wrapper(*args, **kwargs):
        if not g.user:
            return redirect(url_for('Login.login'))
        else:
            return function()
    return wrapper
