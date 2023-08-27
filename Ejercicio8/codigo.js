//Escribir el código de una función a la que se pasa como parámetro un número entero y devuelve 
//como resultado una cadena de texto que indica si el número es par o impar.
//Mostrar por pantalla el resultado devuelto por la función.

let numero = Number(prompt("Ingrese un numero"));
parImpar(numero)
function parImpar() {    
    if ((numero % 2) == 0) {
        alert("su numero es par");
    }else alert("Su numero es impar");
}