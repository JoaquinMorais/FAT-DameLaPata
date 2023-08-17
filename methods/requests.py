from flask import Blueprint, session, abort, redirect, request,url_for,jsonify

def Request(*args):
    response = {}
    if len(args) == 1:
        arg = args[0]
        try:
            return request.json[arg]
        except:
            try:
                return request.args.get(arg)
            except:
                return None
    else:
        for arg in args:
            try:
                response[f'{arg}'] =  request.json[arg]
            except:
                try:
                    response[f'{arg}'] =  request.args.get(arg)
                except:
                    response[f'{arg}'] = None
    return response
    
def RequestList(*args):
    response = {}
    if len(args) == 1:
        arg = args[0]
        try:
            return request.args.getlist(arg)
        except:
            try:
                return request.json[arg]
            except:
                return None
    else:
        for arg in args:
            try:
                response[f'{arg}'] =  request.args.getlist(arg)
            except:
                try:
                    response[f'{arg}'] =  request.json[arg]
                except:
                    response[f'{arg}'] = None
    return response
    