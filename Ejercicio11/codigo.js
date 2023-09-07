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


// Casos de prueba

// 1) Poder instanciar las diferentes clases sin obtener error alguno.
function test1() {
  const estudiante1 = new Estudiante("Juan",20,"Masculino","Matematicas","nivel1");
  const persona1 = new Persona("Jorge",78,"Se autopersive como un marsupial de las altas planurasdel machupichu")
  const profesor1 = new Profesor("Wilfred",28,"Transexual","Historia","Nivel2");
  return(persona1.nombre || persona1.edad || persona1.genero || estudiante1.nombre || estudiante1.edad || estudiante1.genero || profesor1.nombre || profesor1.edad || profesor1.genero);
}

  
// 2) Instanciar las clases sin pasarles parámetros de construcción y que tire error.
function test2() {
  const estudiante2 = new Estudiante();
  const profesor2 = new Profesor();
  const persona2 = new Persona()
  return(!persona2.nombre || !persona2.edad || !persona2.genero ||!estudiante2.nombre || !estudiante2.edad || !estudiante2.genero || !profesor2.nombre || !profesor2.edad || !profesor2.genero);

}
    
    


// 3) Instanciar la clase Persona y poder invocar el método obtDetalles, mostrando en pantalla los datos de la persona.
function test3() {
  const persona = new Persona("Ana", 30, "Femenino");
  const existeElmetodo = "obtDetalles" in persona;
  return(existeElmetodo);
}

// 4) Instanciar las clases de Estudiante y Profesor y corroborar que contengan las propiedades heredadas.
function test4() {
  const estudiante1 = new Estudiante(20,"Masculino","Matematicas","nivel1");
  const profesor1 = new Profesor("Wilfred",28,"Transexual","Historia","Nivel2");
  return(estudiante1.hasOwnProperty("nombre") && estudiante1.hasOwnProperty("edad") && estudiante1.hasOwnProperty("genero") 
    && 
    profesor1.hasOwnProperty("nombre") && profesor1.hasOwnProperty("edad") && profesor1.hasOwnProperty("genero"));  
}

// 5) Instanciar las clases de Estudiante y Profesor y corroborar que contengan el método heredado.
function test5() {
  const estudiante1 = new Estudiante(20,"Masculino","Matematicas","nivel1");
  const profesor1 = new Profesor("Wilfred",28,"Transexual","Historia","Nivel2");
  const estudianteTieneMetodo = "obtDetalles" in estudiante1;
  const profesorTieneMetodo = "obtDetalles" in profesor1;
  return(estudianteTieneMetodo && profesorTieneMetodo)
}

// Ejecutar los casos de prueba
console.log("test 1:",test1() ? "OK" : "FALLO");
console.log("test 2:",test2() ? "OK" : "FALLO");
console.log("test 3:",test3() ? "OK" : "FALLO");
console.log("test 4:",test4() ? "OK" : "FALLO");
console.log("test 5:",test5() ? "OK" : "FALLO");