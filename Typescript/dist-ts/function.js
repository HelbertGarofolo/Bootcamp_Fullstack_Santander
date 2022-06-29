"use strict";
function somarValoresNumericos(numero1, numero2) {
    return numero1 + numero2;
}
console.log(somarValoresNumericos(5, 7));
function printaValoresNumerocos(numero1, numero2) {
    console.log(numero1 + numero2);
}
function somarValoresNumericosTratar(numero1, numero2, callback) {
    let resultado = numero1 + numero2;
    return callback(resultado);
}
function aoQuadrado(numero) {
    return numero * numero;
}
function dividirPorEleMesmo(numero) {
    return numero / numero;
}
console.log(somarValoresNumericosTratar(1, 3, aoQuadrado));
console.log(somarValoresNumericosTratar(1, 3, dividirPorEleMesmo));
