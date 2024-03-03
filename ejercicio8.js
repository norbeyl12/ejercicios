var numeroInicio = parseInt(prompt("Ingresa el numero inicio"));
var numeroFin =parseInt(prompt("Ingresa el numero fin"));


function sumarRango(numeroInicio, numeroFin) {
    let suma = 0;
    for (let i = numeroInicio; i <= numeroFin; i++) {
        if(numeroFin===numeroInicio){
            return 0;
        }else{
            return suma+= i;
        }
    }
    return suma;
  }
  

  console.log(sumarRango(numeroInicio, numeroFin)); 

  