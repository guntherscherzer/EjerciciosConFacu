//A partir del siguiente array que se proporciona: var valores = [true, 5, false, "hola", "adios", 2];
//Determinar cual de los dos elementos de texto es mayor
//Utilizando exclusivamente los dos valores booleanos del array, determinar los operadores necesarios para obtener un resultado true y otro resultado false
//Determinar el resultado de las cinco operaciones matemáticas realizadas con los dos elementos numéricos

let valores = [true, 5, false, "hola", "adios", 2];
text(valores);

function text(valores) {
    if (valores[3]<valores[4]) {
        console.log("El texto mayor es ",valores[4]);
    }else console.log("el texto mayor es ",valores[3]);
}
function (params) {
    
}