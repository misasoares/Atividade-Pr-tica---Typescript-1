"use strict";
// 7. Crie um tipo que seja composto por um User OU por um Diretor
// usando interseção de tipos. Desenvolva uma função que receba
// uma lista desse novo tipo e, para cada e da lista, imprima:
// a. O mesmo que o exercício 5, em caso de objeto User.
// b. O mesmo que o exercício 6, em caso de objeto Diretor.
function exibirInfo(lista) {
    lista.forEach((e) => {
        if ('nivelComissionamento' in e) {
            console.log(`Diretor(a) ${e.nome}, ${e.idade} anos, comissão nível ${e.nivelComissionamento}, salário ${e.salario ? `R$ ${e.salario}` : 'N/A'}`);
        }
        else {
            console.log(`${e.nome}, ${e.idade} anos, ${e.ocupacao}, salário ${e.salario ? `R$ ${e.salario}` : 'N/A'}`);
        }
    });
}
const usuarios = [
    {
        nome: 'carlos',
        idade: 23,
        ocupacao: 'analista de TI',
        salario: 1000,
    },
    {
        nome: 'angelo',
        idade: 35,
        ocupacao: 'gerente de vendas',
        salario: 2000,
        nivelComissionamento: 3,
    },
    {
        nome: 'maria',
        idade: 40,
        ocupacao: 'Diretor(a)',
        nivelComissionamento: 5,
    },
];
exibirInfo(usuarios);
