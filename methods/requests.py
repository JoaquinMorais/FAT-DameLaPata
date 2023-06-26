from flask import Blueprint, session, abort, redirect, request,url_for,jsonify

def Request(*args):
    response = {}
    try:
        for arg in args:
            response[f'{arg}'] =  request.form[arg]
        return response
    except:
        return None