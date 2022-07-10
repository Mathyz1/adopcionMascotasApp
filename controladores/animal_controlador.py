# controlador es el intermediario entre la vista y el modelo
# aqui ocurre la logica del programa

from app import *
from modelos.animal_modelo import *


@app.route('/animales', methods=['GET'])
def get_Animales():
    all_animales = Animal.query.all()   # es una lista
    result = animales_schema.dump(all_animales)
    print(result)
    return jsonify(result)


@app.route('/animales/<id>', methods=['GET'])
def get_animal(id):
    animal = Animal.query.get(id)
    return animal_schema.jsonify(animal)


@app.route('/animales', methods=['POST'])  # crea ruta o endpoint
def create_animal():
    # print(request.json)  # request.json contiene el json que envio el cliente
    descripcion = request.json['descripcion']
    imagen = request.json['imagen']

    new_animal = Animal(descripcion, imagen)
    db.session.add(new_animal)
    db.session.commit()
    return animal_schema.jsonify(new_animal)


@app.route('/animales/<id>', methods=['PUT'])
def update_animal(id):
    animal = Animal.query.get(id)
    descripcion = request.json['descripcion']
    imagen = request.json['imagen']
    animal.descripcion = descripcion
    animal.imagen = imagen
    db.session.commit()
    return animal_schema.jsonify(animal)


@app.route('/animales/<id>', methods=['DELETE'])
def delete_animal(id):
    animal = Animal.query.get(id)
    db.session.delete(animal)
    db.session.commit()
    return animal_schema.jsonify(animal)
