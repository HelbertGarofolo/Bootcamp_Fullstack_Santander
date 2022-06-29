const pessoa = {
    nome: 'Helbert',
    idade: 25,
    profissao: 'Desenvolvedor'
}
pessoa.idade = 37;

const andre: {nome: string, idade: number, profissao: string} = {
    nome: 'Andre',
    idade: 28,
    profissao: 'Programador'
}
const marcos: {nome: string, idade: number, profissao: string} = {
    nome: 'Marcos',
    idade: 29,
    profissao: 'Pintor'
}
const paula: {nome: string, idade: number, profissao: string} = {
    nome: 'Paula',
    idade: 24,
    profissao: 'desenvolvedora'
}

enum Profissao {
    Professor,
    Ator,
    Desenvolvedor,
    Programador,
    Pintor  
}

interface Pessoa{
    nome: string,
    idade: number,
    profissao?: Profissao
}

interface Estudante extends Pessoa{
    materias: string[]
}

const carlos: Pessoa = {
    nome: 'Carlos',
    idade: 45,
    profissao: Profissao.Ator
}

const jessica: Estudante = {
    nome: 'Jéssica',
    idade: 18,
    profissao:Profissao.Professor,
    materias:['Matemática avançada', 'Fisica aplicada']

}
const carla: Estudante = {
    nome: 'Carla',
    idade: 18,
    materias:['Matemática avançada', 'Fisica aplicada']

}

function listar(lista: string[]){
    for(const item of lista){
      console.log('- ', item);      
    }
}
listar(carla.materias); 