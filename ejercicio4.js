function hacerAreglo() {
    const cadena = prompt("Ingrese los valores separados por comas:");
    return cadena.split(",");
  }
  
  function imprimirArreglo(arreglo) {
    console.log("el areglo es: " + arreglo);
    console.log("Arreglo elemtos en linea:");
    for (let i = 0; i < arreglo.length; i++) {
      console.log(arreglo[i]);
    }
  }
  
  function aregloLinea() {
    const arreglo = hacerAreglo();
    imprimirArreglo(arreglo);
  }
  
  aregloLinea();
  