// Escribir un script que simule el lanzamiento de dos dados. 
// Hacer uso de la función Math.random para obtener números aleatorios entre 1 y 6 para cada uno de los lanzamientos de los dados.
// Sumar el resultado de lanzar dos dados y anotar en un array el número de apariciones de dicha suma, repitiendo 36.000 veces esta operación.



function lanzarDado() {
  return Math.floor(Math.random() * 6) + 1;
}


const frecuencias = new Array(11).fill(0); 

const repeticiones = 36000;
for (let i = 0; i < repeticiones; i++) {
  const dado1 = lanzarDado();
  const dado2 = lanzarDado();
  const numsuma = dado1 + dado2;
  frecuencias[numsuma]++;
}

for (let i = 2; i <= 12; i++) {
  console.log(`al sumar los dados el numero ${i} se repitio ${frecuencias[i]} veces`);
}




