var numeroInicio = parseInt(prompt("Ingresa el numero inicio"));
var numeroFin =parseInt(prompt("Ingresa el numero fin"));


function contarRango(numeroInicio, numeroFin) {
    let cantidadNumeros = 0;
    let i = numeroInicio + 1;
    while (i < numeroFin) {
      cantidadNumeros++;
      i++;
    }
    return cantidadNumeros;
  }
  
 
  console.log(contarRango(numeroInicio, numeroFin)); 
