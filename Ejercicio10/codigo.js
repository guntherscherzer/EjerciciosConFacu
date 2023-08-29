// Definir una función que determine si la cadena de texto que se le pasa como parámetro es un palíndromo, es decir, 
// si se lee de la misma forma desde la izquierda y desde la derecha. Ejemplo de palíndromo complejo: "La ruta nos aporto otro paso natural
let word = prompt ("ingrese la palabra para ver si es un palindromo");
pali(word)

function pali(word) {
    word =word.toLowerCase().replaceAll(" ","")
    if (word== word.split('').reverse().join('')) {
        console.log("esta palabra es un palindromo");
    }else {
        console.log("esta palabra no es un palindromo");
    }
    console.log(word.replaceAll(" ",""));
    console.log(word.split(''));
    console.log(word.split('').reverse());
    console.log(word.split('').reverse().join(''));
    console.log(word == word.split('').reverse().join(''));
    console.log(word);
    console.log(word.split('').reverse().join(''));
}
