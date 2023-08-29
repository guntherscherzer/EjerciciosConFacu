//Definir una función que muestre información sobre una cadena de texto que se le pasa como argumento. A partir de la cadena que se le pasa,
//la función determina si esa cadena está formada sólo por mayúsculas, sólo por minúsculas o por una mezcla de ambas.
let word = prompt("ingrese una palabra")
wordCase(word)
function wordCase(word) {
    if (word == word.toUpperCase()) {
            console.log("esta palabra esta toda en mayuscula");
        }else if  (word == word.toLowerCase()) {
            console.log("esta palabra esta toda en minusculas"); 
        }else {
            console.log("esta palabra tiene convinacion entre mayusculas y minusculas");
        }
}


  