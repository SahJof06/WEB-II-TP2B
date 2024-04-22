const tiempo = parseInt(prompt("Ingrese el tiempo que estuvo estacionado en horas"));

if(tiempo >= 1 && tiempo < 3){
    let tarifa = (5 * tiempo); 
    alert("la tarifa es de: $"+tarifa);
} else if (tiempo >=3 && tiempo < 5){
    let tarifa = ((tiempo - 2)*4) + 10;
    alert("La tarifa es de: $"+tarifa);
} else if (tiempo >= 5 && tiempo <= 10){
    let tarifa = ((tiempo - 5) *3) + 22;
    alert("La tarifa es de: $"+tarifa);
} else if (tiempo > 10){
    let tarifa = ((tiempo - 10) *2) + 37;
    alert("La tarifa es de: $"+tarifa);
} else{
    alert("ingrese un valor mayor a cero");
}