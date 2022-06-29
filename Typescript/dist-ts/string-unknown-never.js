"use strict";
let anyEstaDeVolta;
anyEstaDeVolta = 1;
anyEstaDeVolta = 'test';
anyEstaDeVolta = 5;
let stringTest = 'verificar';
stringTest = anyEstaDeVolta;
let unknownValor;
unknownValor = 3;
unknownValor = 'opa';
unknownValor = true;
unknownValor = 'vai mais vai';
let stringTest2 = 'agora vai mesmo';
//stringTest2 = unknownValor;
if (typeof unknownValor === 'string') {
    stringTest2 = unknownValor;
}
function jogaErro(erro, codigo) {
    throw { error: erro, code: codigo };
}
jogaErro('deu ruim a parada', 1500);
