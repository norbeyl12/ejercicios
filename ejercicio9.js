var texto = prompt("Ingresa el texto");
function numeroDeAes(texto) {
    let cantidadAes = 0;
    for (let i = 0; i < texto.length; i++) {
      if (texto[i] === "a") {
        cantidadAes++;
      }
    }
    return cantidadAes;
  }
  
  console.log(numeroDeAes(texto));
  