"use strict";
// // 6. Usando o contexto do exercício 6, crie um tipo de usuário que
// // representa funcionários da diretoria da empresa. O tipo Diretor deve
// // conter as propriedades: nome, idade, salário (opcional) e nível de
// // comissionamento (numérico). Crie uma função que receba um
// // Diretor e mostre suas informações. Exemplos:
// // a. “Diretor(a) Daphne, 23 anos, comissão nível 5, salário R$ 1000”
// // b. “Diretor(a) Daphne, 23 anos, comissão nível 5, salário N/A”
function infoDiretor(diretor) {
    let salario = diretor.salario ? `R$ ${diretor.salario}` : 'N/A';
    console.log(`Diretor(a) ${diretor.nome}, ${diretor.idade} anos, comissão nível ${diretor.nivelComissionamento}, salário ${salario}`);
}
const diretor1 = {
    nome: 'misael',
    idade: 23,
    ocupacao: 'Diretor(a)',
    salario: 1000,
    nivelComissionamento: 5,
};
const diretor2 = {
    nome: 'carlos',
    idade: 23,
    ocupacao: 'Diretor(a)',
    nivelComissionamento: 2,
};
infoDiretor(diretor1);
infoDiretor(diretor2);
