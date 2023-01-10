
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

// Prototipos con la sintaxis de clase:
// Tanto en esta sintaxis como en la anterior si queremos crear instancias debemos 
    // recordar el orden de los argumentos... 

class Student2 {
    constructor(name, age, cursosAprobados){
        this.name = name;
        this.age = age;
        this.cursosAprobados = cursosAprobados;
        // this.aprobarCurso = function (nuevoCurso){
        //     this.cursosAprobados.push(nuevoCurso)
        // } Podemos crear metodos de esta manera o
    };

    // Despues del metodo constructor, podemos crear los metodos que querramos por fuera:
    
    aprobarCurso(nuevoCurso){
        this.cursosAprobados.push(nuevoCurso);

    };
};

// En este caso, cuando creamos las nueva instancia, debemos agregar ademas de 
// las llaves, las keys de los argumentos con sus dos puntos y el value que le vamos
// a asignar:

const miguelito2 = new Student2 (
    "Miguel",
    28,
    [
        "Curso Analisis de negocios",
        "Curso de principios de visualizacion de datos",
]
);

// Si en los paramentros de la funcion constructora agregamos las llaves de objeto
// ya no es nesesario recordar el orden de los argumentos:
// Solo que cuando creamos la nueva instancia, devemos agregar las llaves tambien
// Ademas en esta sintaxis podemos indicar valores por defecto
class Student2 {
    constructor({
        name,
        age,
        cursosAprobados = [],
    }){
        this.name = name;
        this.age = age;
        this.cursosAprobados = cursosAprobados;
    };
        aprobarCurso(nuevoCurso){
        this.cursosAprobados.push(nuevoCurso);

    };
};

const miguelito = new Student2 ({
    nombre:"Miguel",
    age:28,
    cursosAprobados: [
        "Curso Analisis de negocios",
        "Curso de principios de visualizacion de datos",
]}
);