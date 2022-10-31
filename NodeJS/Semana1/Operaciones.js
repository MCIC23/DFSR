const Operaciones = {}

function suma(numero1, numero2){
    return Number(numero1) + Number(numero2);
}

function resta(numero1, numero2){
    return Number(numero1) - Number(numero2);
}

function multiplicacion(numero1, numero2){
    return Number(numero1) * Number(numero2);
}
function division(numero1, numero2){
    return Number(numero1) / Number(numero2);
}
module.exports = Operaciones;
Operaciones.suma = suma;
Operaciones.resta = resta;
Operaciones.multiplicacion = multiplicacion;
Operaciones.division = division;
