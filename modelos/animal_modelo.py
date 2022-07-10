from app import db, ma


class Animal(db.Model):  # defino la tabla
    id = db.Column(db.Integer, primary_key=True)
    descripcion = db.Column(db.String(100))
    imagen = db.Column(db.String(100))

    def __init__(self, descripcion, imagen):
        self.descripcion = descripcion
        self.imagen = imagen

    def __str__(self):
        return "id:"+str(self.id)+" descripcion:" + self.descripcion + "imagen:"+str(self.imagen)


db.create_all()  # crea las tablas


class AnimalSchema(ma.Schema):
    class Meta:
        fields = ('id', 'descripcion', 'imagen')


animal_schema = AnimalSchema()           # para  un registro
animales_schema = AnimalSchema(many=True)  # multiples registros
