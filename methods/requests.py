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
    