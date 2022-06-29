function calculaIdade(anos){
    return `Daqui a ${anos} anos, ${this.nome} terá ${
        this.idade + anos
    } anos de idade. `;
}

const pessoa1 = {
    nome: "Maria",
    idade: 30,
};
const pessoa2 = {
    nome: "Helbert",
    idade: 37,
};
const animal = {
    nome: "Theo",
    idade: 6,
    raca: 'gato'
};

console.log(calculaIdade.apply(pessoa2, [30]));