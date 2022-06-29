const alunos = [
    {
        nome: 'João',
        nota: 5,
        turma: '1B'
    },
    {
        nome: 'Sofia',
        nota: 9,
        turma: '1B',
    },
    {
        nome: 'Helbert',
        nota: 10,
        turma: '3A',
    },
    {
        nome: 'Wiliam',
        nota: 3,
        turma: '2A',
    },
];

function alunosAprovados(arr, media){
   let aprovados = [];

    for (let i = 0; i < arr.length; i ++){

        const {nota, nome} = arr[i];

        if (nota >= media){
            aprovados.push(nome);
        }
    } 
    return aprovados;
}
console.log(alunosAprovados(alunos, 5));