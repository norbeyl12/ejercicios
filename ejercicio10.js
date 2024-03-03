var texto = prompt("Ingresa el texto");
var caracter = prompt("Ingresa el caracter");

function numeroDeCaracteres(texto, caracter) {
    let cantidadCaracteres = 0;
    for (let i = 0; i < texto.length; i++) {
      if (texto[i] === caracter) {
        cantidadCaracteres++;
      }
    }
    return cantidadCaracteres;
  }
  
 console.log(numeroDeCaracteres(texto,caracter))