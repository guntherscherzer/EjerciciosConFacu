//Definir la siguiente jerarquía de objetos, haciendo uso de los prototipos de JavaScript:
//    -Objeto Persona con las propiedades nombre, edad y género, y el método obtDetalles(), que muestra por pantalla las propiedades de la persona.
//    -Objeto Estudiante, que hereda de Persona, e incluye las propiedades curso y grupo y el método registrar().
//    -Objeto Profesor, que hereda de Persona, e incluye las propiedades asignatura y nivel y el método asignar().
//Crear los objetos y casos de prueba necesarios para comprobar el correcto funcionamiento de la jerarquía.

//Objeto Persona
class Persona {
    constructor(nombre,edad,genero){
        this.nombre = nombre;
        this.edad = edad;
        this.genero = genero;
    }
    obtDetalles() {
        console.log(this.nombre,this.edad,this.genero);
    }
}
 //Objeto Estudiante
 class Estudiante extends Persona{
    constructor(nombre,edad,genero,curso,grupo){
        super(nombre,edad,genero);
        this.curso = curso;
        this.grupo = grupo;
    }
    registrar() {}
 }
 //objeto Profesor
 class Profesor extends Persona{
    constructor (nombre,edad,genero,asignatura,nivel){
        super(nombre,edad,genero);
        this.asignatura = asignatura
        this.nivel = nivel;
    }
    asignar(){};
 }

 //Casos de prueba
 const estudiante1 = new Estudiante("Juan",20,"Masculino","Matematicas","nivel1");
 const profesor1 = new Profesor("Wilfred",28,"Transexual","Historia","Nivel2");

 