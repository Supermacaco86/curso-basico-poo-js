
// Objeto literal: no está creado a partir de un prototipo o clase.
const natalia = {
    name: "Natalia",
    age: 20,
    cursosAprobados: [
        "Curso definitivo de HTML y CSS",
        "Curso practico de HTML y CSS"
    ],
    aprobarCurso: function (nuevoCurso){
        this.cursosAprobados.push(nuevoCurso)
    }
    // Otra manera de escribir funciones dentro de los objetos es:
    // aprobarCurso (nuevoCurso){
    //     this.cursosAprobados.push(nuevoCurso)
    // }
};

// Hacer que Natalia apruebe otro curso.
//Con el punto luego del nombre del objeto podemos acceder a sus propiedades y metodos si es que tiene
// natalia.cursosAprobados.push("Cueso de responsive design")

// Prototipo:
// Forma 1:
function Student (name, age, cursosAprobados){
    this.name = name;
    this.age = age;
    this.cursosAprobados = cursosAprobados;
    this.aprobarCurso = function (nuevoCurso){
        this.cursosAprobados.push(nuevoCurso)
    }
}

//Forma 2:

function Student (name, age, cursosAprobados){
    this.name = name;
    this.age = age;
    this.cursosAprobados = cursosAprobados;
};

Student.prototype.aprobarCurso = function (nuevoCurso){
        this.cursosAprobados.push(nuevoCurso)
    };

// Creando un objeto instacia de prototipo (usamos la palabra reservada new):

const juanita = new Student(
    "Juanita Alejandra",
    15,
    ["Curso de creacion de videojuego",
"Curso de creacion de personajes"]
)