# controlador es el intermediario entre la vista y el modelo
# aqui ocurre la logica del programa

from app import *
from modelos.mascota_modelo import *


@app.route('/mascotas', methods=['GET'])
def get_Mascotas():
    all_mascotas = Mascota.query.all()     # query.all() lo hereda de db.Model
    # .dump() lo hereda de ma.schema
    result = mascotas_schema.dump(all_mascotas)
    return jsonify(result)


@app.route('/mascotas/<id>', methods=['GET'])
def get_mascota(id):
    mascota = Mascota.query.get(id)
    return mascota_schema.jsonify(mascota)


@app.route('/mascotas/<id>', methods=['DELETE'])
def delete_mascota(id):
    mascota = Mascota.query.get(id)
    db.session.delete(mascota)
    db.session.commit()
    return mascota_schema.jsonify(mascota)


@app.route('/mascotas', methods=['POST'])  # crea ruta o endpoint
def create_mascota():
    print(request.json)  # request.json contiene el json que envio el cliente
    nombre = request.json['nombre']
    descripcion = request.json['descripcion']
    sexo = request.json['sexo']
    edad = request.json['edad']
    animal = request.json['animal']
    foto = request.json['foto']
    desparasitado = request.json['desparasitado']
    vacunado = request.json['vacunado']
    esterilizado = request.json['esterilizado']
    peso = request.json['peso']
    tamanio = request.json['tamanio']

    new_mascota = Mascota(nombre, descripcion, sexo, edad,
                          animal, foto, desparasitado, vacunado, esterilizado, peso, tamanio)
    db.session.add(new_mascota)
    db.session.commit()
    return mascota_schema.jsonify(new_mascota)


@app.route('/mascotas/<id>', methods=['PUT'])
def update_mascota(id):
    mascota = Mascota.query.get(id)
    nombre = request.json['nombre']
    descripcion = request.json['descripcion']
    edad = request.json['edad']
    animal = request.json['animal']
    foto = request.json['foto']
    desparasitado = request.json['desparasitado']
    vacunado = request.json['vacunado']
    esterilizado = request.json['esterilizado']
    peso = request.json['peso']
    tamanio = request.json['tamanio']

    mascota.nombre = nombre
    mascota.descripcion = descripcion
    mascota.edad = edad
    mascota.animal = animal
    mascota.foto = foto
    mascota.desparasitado = desparasitado
    mascota.vacunado = vacunado
    mascota.esterilizado = esterilizado
    mascota.peso = peso
    mascota.tamanio = tamanio
    db.session.commit()
    return mascota_schema.jsonify(mascota)
