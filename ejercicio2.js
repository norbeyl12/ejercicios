
var peso = prompt("Por favor, ingresa tu edad:");
var altura = prompt("Por favor, ingresa tu sueldo:");


function calcularbmi(edad, ingresos) {
    if (edad >= 18 && ingresos >= 1000) {
        return "el impuesto es " + ingresos * 0.4;
    } else {
        return 0;
    }

}

console.log("Primer ejercicio")
console.log(calcularbmi(peso, altura)); 
