export function gradosCelsiusAFahrenheityKelvin(){
    alert(`Convertidor de Grados Celsius a Grados Fahrenheit`);
    let dato;
    do{
    dato= prompt(`Porfavor Teclee los grados ºC que desea convetir a ºF: `);
   
   if(dato != null){
    dato = dato.trim();// quitar espacios de mi dato quye mande el usuario
   }
   
    if(dato===""||dato=== null){
    alert(`Porfavor ingresa un dato
    Vuelve a intentar`);
   }else if(isNaN(Number(dato)) ){
    alert(`Porfavor ingresa solo datos numericos
    Vuelve a intentar`);
   }else{
    let gradosC = Number(dato);
    alert(`º ${gradosC}`);
    let F = ((gradosC*(9/5))+32);
    let K = (gradosC + 273.15);
    alert(`Grados Fahrenheit: ${F} ºF
Grados Kelvin: ${K} ºK`);
    }// fin else
}while(dato === ""||dato === "null" || isNaN(Number(dato)));
}// fin  function gradosCelisusAFahrenheityKelvin
