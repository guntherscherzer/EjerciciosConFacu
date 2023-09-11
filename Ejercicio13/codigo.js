// Crear las expresiones regulares necesarias para resolver los siguientes puntos:

// Crear una expresión regular valide una fecha en formato "XX/XX/XXXX", donde "X" es un dígito. Probarlo con la expresión: "Nací el 05/04/1982 en Donostia.".

// Crear una expresión regular que valide una dirección de email. Para simplificar, los valores antes de la @ pueden contener cualquier carácter alfanumérico, y los caracteres .
//  y -, mientras que los valores tras la @ pueden contener caracteres alfanuméricos, y el tipo de dominio puede tener una longitud de 2 o 3 caracteres.


// Dada la siguiente función que de reemplazo de caracteres, reescribirla utilizando expresiones regulares.
// function escapeHTML(text) {
//     var replacements = [["&", "&amp;"], ["\"", "&quot;"],
//                         ["<", "&lt;"], [">", "&gt;"]];
//     forEach(replacements, function(replace) {
//         text = text.replace(replace[0], replace[1]);
//     });
//     return text;
// }
// Dados un nombre y un apellido, crear la expresión regulatr necesaria para mostrarlos en orden inverso y separados por una coma. Por ejemplo, la cadena "John Smith", convertirla en "Smith, John".
// Crear una expresión regular que elimine las etiquetas potencialmente peligrosas (<script>...</script>) y todo su contenido de una cadena HTML.

//Exprecion Regular Fecha
//   console.log("test 1");
//   let frase  = prompt("ingrese una frase con fecha en con este modelo xx/xx/xxxx");
//   let fechaRegex = /\d{2}\/\d{2}\/\d{4}/
//   console.log(coincidencias(frase,fechaRegex));

// console.log("test 2");
// let mail = prompt("ingrese su mail");
// let mailRegex =/[A-Za-z0-9\-]+@[A-Za-z0-9]{2,3}\.[A-Za-z0-9\.]/
// console.log(coincidencias(mail,mailRegex));



// console.log("test 3");
// let text = prompt("Ingrese una frase que contenga los siguientes caracteres ")
// console.log(escapeHTML(text));
// function escapeHTML(text) {
//    text = text.replaceAll(/&|\\|<|>/g,"&amp;");
//    return text
// }

// console.log("test 4");
// // Obtener nombre y apellido
// let NomyApe = prompt("Ingrese su Nombre y Apeliido")
// console.log(inversion(NomyApe));
// function inversion(NomyApe) {
//   // crear exprecion para buscar palabaa epacio palabra
//   let NomyApRegEx = /\s/
//   // separar nombre y appelido
//   // invertir el orde (apellido nombre)
//   // juntar con una coma en el medio
//   NomyApe = NomyApe.split(NomyApRegEx).reverse().join(", ");
//   return NomyApe
// }

console.log("test 5");
//obtener un strin HTML
let strHtml = prompt("ingrese su HTML");
//devolver el html
console.log(deleteStr(strHtml));
function deleteStr(strHtml) {
  // Crear una expresión regular que coincida con (<script>...</script>)
  let deleteRegex = /\<script\>.*\<\/script\>/;
  //Eliminar lo que coincida con el rege
  strHtml = strHtml.replace(deleteRegex,"");
  return strHtml;
}
