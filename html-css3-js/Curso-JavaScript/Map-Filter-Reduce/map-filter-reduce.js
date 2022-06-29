console.log("");
const maca = {
    value: 2,
}

const laranja = {
    value: 3,
};


function mapComThis(arr, thisArg) {
    return arr.map(function (item) {
        return item * this.value;
    }, thisArg);
}

const nums1 = [1, 2];
console.log("Map com This");
console.log("");
console.log('this -> maçã', mapComThis(nums1, maca));
console.log('this -> laranja', mapComThis(nums1, laranja));


function mapSemThis(arr) {
    return arr.map(function (item) {
        return item * 2;
    })
}

const nums = [2, 4, 6, 8, 10];
console.log("");
console.log("Map sem This");
console.log("");
console.log(mapSemThis(nums1));


console.log("");
console.log("Filter");
console.log("");

function filtraPares(arr) {
    return arr.filter(callback);
}

function callback(item) {
    return item % 2 === 0;
}

const meuArray = [1, 23, 55, 67, 30, 2, 4, 18, 26, 15];

console.log(filtraPares(meuArray));

console.log("");
console.log("Reduce");
console.log("");


function somaNumeros(arr) {
    return arr.reduce(function (prev, current) {
        console.log({ prev });
        console.log({ current });
        return prev + current;
    }, 0);
}

const arr = [1, 2];

console.log(somaNumeros(arr));


console.log("");
console.log("LIsta");

const lista = [
    {
        name: 'sabão em pó',
        preco: 30,
    },
{
        name: 'cereal',
        preco: 12,
    },
 {
        name: 'toalha',
        preco: 30,
    },
];

const saldoDisponivel = 100;

function calculaSaldo (saldoDisponivel, lista){
    return lista.reduce(function(prev, current, index){
        console.log('rodada', index +1);
        console.log({prev});
        console.log({current});
        return prev - current.preco;
    }, saldoDisponivel);
}

console.log(calculaSaldo(saldoDisponivel, lista));
