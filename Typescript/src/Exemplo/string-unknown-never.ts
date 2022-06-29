let anyEstaDeVolta: any;
anyEstaDeVolta = 1;
anyEstaDeVolta = 'test';
anyEstaDeVolta = 5;

let stringTest: string = 'verificar'
stringTest = anyEstaDeVolta;

let unknownValor: unknown;
unknownValor = 3;
unknownValor = 'opa';
unknownValor = true;
unknownValor = 'vai mais vai';

let stringTest2: string = 'agora vai mesmo';
//stringTest2 = unknownValor;

if (typeof unknownValor === 'string'){
    stringTest2 = unknownValor;
}

function jogaErro(erro: string, codigo: number): never{
    throw {error: erro, code: codigo}
}
jogaErro('deu ruim a parada', 1500);