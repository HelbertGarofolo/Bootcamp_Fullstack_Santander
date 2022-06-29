"use strict";
const pessoa = {
    nome: 'Helbert',
    idade: 25,
    profissao: 'Desenvolvedor'
};
pessoa.idade = 37;
const andre = {
    nome: 'Andre',
    idade: 28,
    profissao: 'Programador'
};
const marcos = {
    nome: 'Marcos',
    idade: 29,
    profissao: 'Pintor'
};
const paula = {
    nome: 'Paula',
    idade: 24,
    profissao: 'desenvolvedora'
};
var Profissao;
(function (Profissao) {
    Profissao[Profissao["Professor"] = 0] = "Professor";
    Profissao[Profissao["Ator"] = 1] = "Ator";
    Profissao[Profissao["Desenvolvedor"] = 2] = "Desenvolvedor";
    Profissao[Profissao["Programador"] = 3] = "Programador";
    Profissao[Profissao["Pintor"] = 4] = "Pintor";
})(Profissao || (Profissao = {}));
const carlos = {
    nome: 'Carlos',
    idade: 45,
    profissao: Profissao.Ator
};
const jessica = {
    nome: 'Jéssica',
    idade: 18,
    profissao: Profissao.Professor,
    materias: ['Matemática avançada', 'Fisica aplicada']
};
const carla = {
    nome: 'Carla',
    idade: 18,
    materias: ['Matemática avançada', 'Fisica aplicada']
};
function listar(lista) {
    for (const item of lista) {
        console.log('- ', item);
    }
}
listar(carla.materias);
