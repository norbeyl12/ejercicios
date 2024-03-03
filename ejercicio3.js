
var peso = prompt("Por favor, ingresa tu peso:");
var altura = prompt("Por favor, ingresa tu altura:");
var IMC = peso/(altura**2)

function calcularbmi() {
    if (IMC<18.5) {
        return "Bajo de peso, tu IMC es de: " + IMC ;
    } else if(IMC >=18.5 && IMC<24.9){
        return "Normal de peso, tu IMC es de: " + IMC ;
    }else if(IMC >= 24.9 && IMC<30){
        return "Sobrepeso, tu IMC es de: " + IMC ;    }
    else {
        return "obeso, tu IMC es de: " + IMC ;

    }   

}

console.log("tercer ejercicio")
console.log(calcularbmi(peso, altura)); 
