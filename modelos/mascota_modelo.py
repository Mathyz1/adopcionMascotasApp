from app import db, ma


class Mascota(db.Model):  # defino la tabla
    id = db.Column(db.Integer, primary_key=True)
    nombre = db.Column(db.String(100),nullable=False)
    descripcion = db.Column(db.String(100),nullable=False)
    sexo = db.Column(db.String(100),nullable=False)
    edad = db.Column(db.Integer)
    animal = db.Column(db.Integer,nullable=False)
    foto = db.Column(db.String(100))
    peso = db.Column(db.Integer)
    desparasitado = db.Column(db.Boolean)
    vacunado = db.Column(db.Boolean)
    esterilizado = db.Column(db.Boolean)
    tamanio = db.Column(db.String(100))

    def __init__(self, nombre, descripcion, sexo, edad, animal, foto, desparasitado, vacunado, esterilizado, peso, tamanio):
        self.nombre = nombre
        self.descripcion = descripcion
        self.sexo = sexo
        self.edad = edad
        self.animal = animal
        self.foto = foto
        self.desparasitado = desparasitado
        self.vacunado = vacunado
        self.esterilizado = esterilizado
        self.peso = peso
        self.tamanio = tamanio


db.create_all()  # crea las tablas


class MascotaSchema(ma.Schema):
    class Meta:
        fields = ('id', 'nombre', 'descripcion', 'sexo',
                  'edad', 'animal', 'foto', 'desparasitado', 'vacunado', 'esterilizado', 'peso', 'tamanio')


mascota_schema = MascotaSchema()            # para crear un producto
mascotas_schema = MascotaSchema(many=True)  # multiples registros
