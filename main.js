
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

//__________________________________________________________________________________//

// Cuatro pilares de la programacion orientada a objetos:
// Abstraccion, encapsulamiento, herencia y polimorfismo. 

// Abstraccion:
// Al constructor le pasamos solo un parametro que es un objeto que tiene diferentes 
// propiedades. Esto nos permite a la hora de crear instancias, que podemos pasarle 
// menos propiedades y va a funcionar igual. Ademas podemos pasarle varias atributos
// sin nesesidad de respetar el orden de las mismas. Y ademas podemos asignarles un 
// valor por defecto. Si le asignamos el valor undefine, le estamos indicando que ese
// parametro no es obligatorio:


class Course{
    constructor({
        name,
        clasess = [],
    }){
        this.name = name;
        this.clasess = clasess;
    }
}

const cursoProgrBasica = new Course({
    name: "Curso gratis de programacion basica",
})

const cursoDefinitivoHTML = new Course({
    name:  "Curso definitivo de HTML y CSS",
})

const cursoPracticoHTML = new Course({
    name: "Curso practico de HTML y CSS",
})

const cursoDataBusiness = new Course({
    name: "Curso DataBusiness",
})

const cursoDataviz = new Course({
    name:  "Curso Dataviz",
})

const cursoUnity = new Course({
    name:  "Curso de Unity",
})

const cursoUnreal = new Course({
    name: "Curso de Unreal",  
})


class LearningPath{
    constructor({
        name,
        courses = [],
    }){
        this.name = name;
        this.courses = courses;
    }
}

const escuelaWeb = new LearningPath({
    name: "Escuela de desarrollo web",
    courses: [
        cursoProgrBasica,
        cursoDefinitivoHTML,
        cursoPracticoHTML,       
    ]
});

const escuelaData = new LearningPath({
    name: "Escuela de Data Science",
    courses: [
        cursoProgrBasica,
        cursoDataBusiness,
        cursoDataviz,    
    ]
});
const escuelaVgs = new LearningPath({
    name: "Escuela de Video Juegos",
    courses: [
        cursoProgrBasica,
        cursoUnity,
        cursoUnreal,  
    ]
});


class Student3 {
    constructor({
        name,
        email,
        userName,
        twitter = undefined,
        instagram = undefined,
        faceboock = undefined,
        approvedCourses = [],
        learningPath = [],
    }){
        this.name = name;
        this.email = email;
        this.userName = userName;
        this.socialMedia = {
            twitter,
            instagram,
            faceboock,
        };
        this.approvedCourses = approvedCourses;
        this.learningPath = learningPath;
    };
};

const juan = new Student3 ({
    name: "Juan",
    userName: "Juan",
    email: "juan@juan.com",
    twitter: "juan",
    learningPath: [
        "escuelaWeb",
        "escuelaVgs",
    ]
})

const pedro = new Student3 ({
    name: "Pedro",
    userName: "Pedro",
    email: "pedro@pedro.com",
    twitter: "Pedro",
    learningPath: [
        "escuelaWeb",
        "escuelaData",
    ]
})

//_______________________________________________________________________________//
// Encapsulamiento con Getters y Setters
// Si a nuestros atributos les anteponemos un guion bajo en su nombre, le estamos
// indicando a los demas desarrolladores que no modifiquen estos atributos. Esto
// es solo una convencion. Pero para hacer un poco mas privado nuestro codigo, 
// podemos utilizar dos funciones, los gettes y los setters:


class CourseEncapsulamiento{
    constructor({
        name,
        clasess = [],
    }){
        this._name = name;
        this.clasess = clasess;
    }
    get name(){   //Getter
        return this._name
    }
    set name(nuevoNombre){  //Setter
        if(nuevoNombre === "Curso malo"){
            console.error("Ese nombre no es valido")
        }else{
            this._name = nuevoNombre
        }
    }
}



const cursoProgrBasica1 = new CourseEncapsulamiento({
    name: "Curso gratis de programacion basica",
})

// Para poder cambiar el nombre con el setter, debemos utilizar dot notation
//cursoProgrBasica1.name = "nuevoNombre"

// Si lo llamamos de esta manera:
// cursoProgrBasica.name
// Nos va a retornar esto:
// "Curso gratis de programacion basica"

//_________________________________________________________________________//

// Encapsulamiento con modulos de ECMAscript6
// Para utilizar los modulos debemos cambiarle la extencio al achivo main que llamamos
// en el scrip de html, por la extencion: mjs, nuetro script quedaría así:
// main.mjs y tambien le agragamos que es de type="module":
// <script src="./main.mjs" type="module"></script>
// entonces agregando la pabra reservada export, le indicamos al html a que podrá
// acceder. Esto lo logramos cambiando el scrip anterior por este script al html:
// <script type="module"> import {PlatziClass} from "./main.mjs"; </script>

function videoPlay(id){
    const urlSecreta = "http://blablabla" + id
    console.log("Se está reproduciento" + urlSecreta)
}

function videoStop(id){
    const urlSecreta = "http://blablabla" + id
    console.log("Se pausó" + urlSecreta)
}

export class PlatziClass { // unica funcion a la que va a poder acceder el html
    constructor({
        name,
        videoID,
    }){
        this.name = name;
        this.videoID = videoID;

    }

    reproducir(){
        videoPlay(this.videoID);
    }
    pausar(){
        videoStop(this.videoID);
    }
}

//__________________________________________________________________________//

// Herencia
// La herencia nos permite, justamente heredar propiedades de un prototipo madre
// a prototipos hijos, para asi evitar repetir codigo. Para esto vamos a utilizar
// la palabra reservada extends.

class CourseHerencia{
    constructor({
        name,
        clasess = [],
        isFree = false,
        lang = "Spanish"
    }){
        this.name = name;
        this.clasess = clasess;
        this.isFree = isFree;
        this.lang = lang;
    }
}

const cursoProgrBasicaHerencia = new Course({
    name: "Curso gratis de programacion basica",
    isFree: true,
})

const cursoDefinitivoHTMLHerencia = new Course({
    name:  "Curso definitivo de HTML y CSS",
})

const cursoPracticoHTMLHerencia = new Course({
    name: "Curso practico de HTML y CSS",
    lang: "English",
})

const cursoDataBusinessHerencia = new Course({
    name: "Curso DataBusiness",
})

const cursoDatavizHerncia = new Course({
    name:  "Curso Dataviz",
    lang: "English",
})

const cursoUnityHerencia = new Course({
    name:  "Curso de Unity",
})

const cursoUnrealHerencia = new Course({
    name: "Curso de Unreal",
    lang: "English",  
})


class StudentHerencia {
    constructor({
        name,
        email,
        userName,
        twitter = undefined,
        instagram = undefined,
        faceboock = undefined,
        approvedCourses = [],
        learningPath = [],
    }){
        this.name = name;
        this.email = email;
        this.userName = userName;
        this.socialMedia = {
            twitter,
            instagram,
            faceboock,
        };
        this.approvedCourses = approvedCourses;
        this.learningPath = learningPath;
    };
};

class FreeStudent extends StudentHerencia{
    constructor(props){
        super(props) // El super nos permite referenciar a la clase madre.
    }
    approvedCourses(newCourse){
        if(newCourse.isFree){
            this.approvedCourses.push(newCourse);
        }else{
            console.warn("Lo siento,"+ this.name +", solo puedes tomar cursos free." )
        }
    }
}

class BasicStudent extends StudentHerencia{
    constructor(props){
        super(props) 
    }
    approvedCourses(newCourse){
        if(newCourse.lang !== "English"){
            this.approvedCourses.push(newCourse);
        }else{
            console.warn("Lo siento,"+ this.name +", solo puedes tomar cursos en Español." )
        }
    }
}

class ExpertStudent extends StudentHerencia{
    constructor(props){
        super(props) 
    }
    approvedCourses(newCourse){
            this.approvedCourses.push(newCourse);
    }
}

const juanHerencia = new FreeStudent ({
    name: "Juan",
    userName: "Juan",
    email: "juan@juan.com",
    twitter: "juan",
    learningPath: [
        "escuelaWeb",
        "escuelaVgs",
    ]
})

const pedroHerencia = new BasicStudent ({
    name: "Pedro",
    userName: "Pedro",
    email: "pedro@pedro.com",
    twitter: "Pedro",
    learningPath: [
        "escuelaWeb",
        "escuelaData",
    ]
})

const aguHerencia = new ExpertStudent ({
    name: "Pedro",
    userName: "Pedro",
    email: "pedro@pedro.com",
    twitter: "Pedro",
    learningPath: [
        "escuelaWeb",
        "escuelaData",
    ]
})

//___________________________________________________________________//

// Polimorfismo
// El polimorfismo permite que las subclases puedan editar y/o anulas el 
// comportamiento de los metodos y/o atributos heredado de la clase madre,
// o super clase.

class Comment{
    constructor({
        content,
        studentName,
        studentRole = "estudiante",
    }){
        this.content = content;
        this.studentName = studentName;
        this.studentRole = studentRole;
        this.likes = 0;
    }    
    publicar(){
        console.log(this.studentName + " (" + this.studentRole + ")");
        console.log(this.likes + " likes");
        console.log(this.content);

    }
}

class StudentPolimorfismo {
    constructor({
        name,
        email,
        userName,
        twitter = undefined,
        instagram = undefined,
        faceboock = undefined,
        approvedCourses = [],
        learningPath = [],
    }){
        this.name = name;
        this.email = email;
        this.userName = userName;
        this.socialMedia = {
            twitter,
            instagram,
            faceboock,
        };
        this.approvedCourses = approvedCourses;
        this.learningPath = learningPath;
    };
    publicarComentario(commentContent){
        const comment = new Comment({
            content: commentContent,
            studentName: this.name,
        });
        comment.publicar();
    }
};

class TeacherStudent extends StudentHerencia{
    constructor(props){
        super(props) 
    }
    approvedCourses(newCourse){
            this.approvedCourses.push(newCourse);
    }
    publicarComentario(commentContent){
        const comment = new Comment({
            content: commentContent,
            studentName: this.name,
            studentRole: "profesor",
        });
        comment.publicar();
    }

}

const freddy = new TeacherStudent ({
    name: "freddy",
    userName: "Pfreddyedro",
    email: "freddy@freddy.com",
    twitter: "freddy",
})