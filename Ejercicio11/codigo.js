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

// Instancia de Objetos
const estudiante1 = new Estudiante("Juan",20,"Masculino","Matematicas","nivel1");
const profesor1 = new Profesor("Wilfred",28,"Transexual","Historia","Nivel2");
 
// Casos de prueba

// 1) Poder instanciar las diferentes clases sin obtener error alguno.
function test1() {
  const estudiante1 = new Estudiante("Juan",20,"Masculino","Matematicas","nivel1");
  const profesor1 = new Profesor("Wilfred",28,"Transexual","Historia","Nivel2");
  return("test1:",estudiante1,profesor1);
}
  
// 2) Instanciar las clases sin pasarles parámetros de construcción y que tire error.
function test2() {
  const estudiante2 = new Estudiante();
  const profesor2 = new Profesor();
  if (!estudiante2.nombre || !estudiante2.edad || !estudiante2.genero || !profesor2.nombre || !profesor2.edad || !profesor2.genero) {
      return(true);
    }return(false)
}
    
    


// 3) Instanciar la clase Persona y poder invocar el método obtDetalles, mostrando en pantalla los datos de la persona.
function test3() {
  const persona = new Persona("Ana", 30, "Femenino");
  const existeElmetodo = "obtDetalles" in persona;
  persona.obtDetalles();
  return(existeElmetodo);
}

// 4) Instanciar las clases de Estudiante y Profesor y corroborar que contengan las propiedades heredadas.
function test4() {
  const estudiante1 = new Estudiante(20,"Masculino","Matematicas","nivel1");
  const profesor1 = new Profesor("Wilfred",28,"Transexual","Historia","Nivel2");
  if (estudiante1.hasOwnProperty("nombre") == true && estudiante1.hasOwnProperty("edad") == true && estudiante1.hasOwnProperty("genero") == true 
    && profesor1.hasOwnProperty("nombre") == true && profesor1.hasOwnProperty("edad") == true && profesor1.hasOwnProperty("genero") == true ) {
    return(true);
    
  }return(false);
}

// 5) Instanciar las clases de Estudiante y Profesor y corroborar que contengan el método heredado.
function test5() {
  const estudiante1 = new Estudiante(20,"Masculino","Matematicas","nivel1");
  const profesor1 = new Profesor("Wilfred",28,"Transexual","Historia","Nivel2");
  const estudianteTieneMetodo = "obtDetalles" in estudiante1;
  const profesorTieneMetodo = "obtDetalles" in profesor1;
  return("Estudiante:",estudianteTieneMetodo,"Profesor:",profesorTieneMetodo);
}

// Ejecutar los casos de prueba
test1();
test2();
test3();
test4();
test5();