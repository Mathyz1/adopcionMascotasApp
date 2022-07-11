# CORS es un problema de seguridad, sino no me deja acceder a los JSON.
from flask import Flask, jsonify, request
from flask_cors import CORS

from flask_sqlalchemy import SQLAlchemy
from flask_marshmallow import Marshmallow

import os
import re

app = Flask(__name__)
CORS(app)

# configuro la base de datos, con el nombre el usuario y la clave
#app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql+pymysql://root:root@localhost/flaskmysql'
#                                               user:clave@localhost/nombreBaseDatos


uri = os.getenv("DATABASE_URL")  # or other relevant config var
if uri.startswith("postgres://"):
    uri = uri.replace("postgres://", "postgresql://", 1)
# rest of connection code using the connection string `uri`
# 'postgres://wrilizvyifocoo:81c42b13a206839b3e7f726abd32997d9fbc9b27d720f8260e038a9841a6a876@ec2-3-223-169-166.compute-1.amazonaws.com:5432/dd00723lmf15bj'
app.config['SQLALCHEMY_DATABASE_URI'] = uri

app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)
ma = Marshmallow(app)

from controladores.mascota_controlador import *
from controladores.animal_controlador import *

# programa principal
if __name__ == '__main__':
    app.run(debug=False, port=5000)
