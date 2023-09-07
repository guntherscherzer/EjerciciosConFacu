// Escribir un script que simule el lanzamiento de dos dados. 
// Hacer uso de la función Math.random para obtener números aleatorios entre 1 y 6 para cada uno de los lanzamientos de los dados.
// Sumar el resultado de lanzar dos dados y anotar en un array el número de apariciones de dicha suma, repitiendo 36.000 veces esta operación.

// Crear un objeto para almacenar las frecuencias de las sumas
const sumasFrecuencia = {};

// Función para simular el lanzamiento de un dado
function lanzarDado() {
  return Math.floor(Math.random() * 6) + 1;
}

// Realizar 36,000 lanzamientos de dados
const numLanzamientos = 36000;
let lanzamientos = 0;

while (lanzamientos < numLanzamientos) {
  const dado1 = lanzarDado();
  const dado2 = lanzarDado();
  const suma = dado1 + dado2;
  
  if (sumasFrecuencia[suma]) {
    sumasFrecuencia[suma]++;
  } else {
    sumasFrecuencia[suma] = 1;
  }

  lanzamientos++;
}

// Mostrar las frecuencias de las sumas
for (const suma in sumasFrecuencia) {
  console.log(`Suma ${suma}: ${sumasFrecuencia[suma]} veces`);
}





