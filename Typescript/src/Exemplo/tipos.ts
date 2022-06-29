type input = number | string;

function somarValores(input1: input, input2: input) {
    if (typeof input1 === 'string' || typeof input2 === 'string') {
        return input1.toString() + input2.toString();
    } else {
        return input1 + input2;
    }
}

console.log(1,5);
console.log('ola, ', 'bom dia !');
console.log('4', 6);
console.log('O dia de pagamento é: ', 27);