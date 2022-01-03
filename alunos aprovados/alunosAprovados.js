const alunos = [
    {
    nome: 'sofia',
    nota: 9,
    turma: '1b',
    },
    {
        nome:'João',
        nota:5,
        turma:'1b',
    },
    {
        nome:'Paulo',
        nota:9,
        turma:'2c',
    },
];

function alunosAprovados(arr, media){
    let aprovados = [];
    for (let i =0;i<arr.length; i++){
        const {nota, nome} = arr[i];
        if (nota >= media){
            aprovados.push(nome);

        }

    }
    return aprovados;
}
console.log(alunosAprovados(alunos, 7));