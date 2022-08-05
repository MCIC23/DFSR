class Persona:
    def __init__(self, nombre, apellido_pat, apellido_mat, domicilio, tipo):
        self.nombre= nombre
        self.apellido_pat = apellido_pat
        self.apellido_mat =apellido_mat
        self.domicilio = domicilio
        self.tipo = tipo


def imprimeDatos(Self):
    print("Esta persona se llama", self.nombre)
    print("Es un", self.tipo)

class Alumno(Persona): ##Hijo
    def __init__(self, nombre, apellido_pat, apellido_mat, domicilio, tipo,  numeroCuenta, carrera):
        super().__init__(nombre,apellido_pat, apellido_mat, domicilio, tipo )
        self.numeroCuenta = numeroCuenta
        self.carrera = carrera

class Profesor(Persona): ##Hijo
    def __init__(self, nombre, apellido_pat, apellido_mat, domicilio, tipo, departamento, numeroEmpleado, gradoAcademico):
        super().__init__(nombre,apellido_pat, apellido_mat, domicilio, tipo)
        self.departamento = departamento
        self.numeroEmpleado = numeroEmpleado

    def darClase(self):
     print("El profesor esta dando clases")


p1 = Profesor("Paola", "Sanchez", "Castillo", "Rosa Carmesi 1", "Profesor","Sistemas", 83848, "Licenciatura" )
p1.darClase()

p2 = Alumno("Manuel", "Enriquez", "Pineda", "Estado de Mexico", "Alumno", 747848, "Full")

""" ##Creando un objeto(Instancia) <-

persona1 = Persona("Paola", "Sanchez", "Castillo", "Rosa Carmesi 1", "Profesor")

persona2 = Persona("Manuel", "Enriquez", "Pineda", "Estado de Mexico", "Alumno")

##(new) <-
## Si en la clase No se determina el tipo de acceso(Encapsulamniento) que tendra el metodo
##o el atributo quiere decir que es publico.

print("Objeto (Persona) 1")
print("Esta persona es :", persona1.nombre)
print("Su tipo :", persona1.tipo)

print("Objeto (Persona) 2")
print("Esta persona es :", persona2.nombre)
print("Su tipo :", persona2.tipo) """