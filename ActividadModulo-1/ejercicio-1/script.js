"use strict"

// 1. Realizar el algoritmo que convierta litros en centilitros, decilitros, galones y onzas.

// 1 litro = 1000 centilitros 1 litro = 10 decilitros 1 litro ≈ 0.264172 galones 1 litro ≈ 33.814 onzas líquidas.

let respuesta;
let mensaje="";
const litros = parseFloat(prompt ("ingrese el valor de la unidad en litros a convertir"));
constopcion = prompt ("seleccione mediante el numero indicado, el volumen a convertir:\n1. Centilitros \n2. Decilitros \n3. Galones \n4. Onzas");

switch (parseInt(opcion)){
    case 1: 
    //convertir de litros a centilitros
        respuesta=litros*100;
        mensaje= "${litros} litros es igual a ${respuesta} centilitros¨"
        break;  
        case 2:
            //convertir de litros a decilitros
            respuesta=litros*10;
    mensaje="${litros} litros es igual a ${respuesta} decilitros"
            break;
            case 3:
        //convertir de litros a galones
        respuesta=litros/3.78541;
        mensaje="${litros} litros es igual a ${respuesta} galones"
        break;
        case 4:
            //convertir de litros a onzas
        respuesta=litros*33.814;
        mensaje="${litros} litros es igual a ${respuesta} onzas"
        break;
        default:
            alert("por favor seleccionar de manera correcta el rango de volumen establecido en el mensaje expuexto a convertir");            
}
console.log(mensaje);
