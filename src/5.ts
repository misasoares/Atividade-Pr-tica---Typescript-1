// // 5. Crie um programa para mostrar informações de usuários (User) de
// // uma empresa. Crie o tipo User com as seguintes propriedades:
// // nome, idade, ocupação e salário (opcional). Caso o salário do
// // usuário não seja informado, mostre o valor “N/A”. Exemplo:
// // a. “Daphne, 23 anos, analista de TI, salário R$ 1000”
// // b. “Daphne, 23 anos, analista de TI, salário N/A”

type user = {
    nome:string
    idade:number
    ocupacao:string
    salario?:any
}

const usuario1: user = {
    nome: 'maria',
    idade: 23,
    ocupacao: 'analista de TI',
    salario: 1000,
  };

  const usuario2: user = {
    nome: 'joaquina',
    idade: 23,
    ocupacao: 'analista de TI',
  };

function info(us:user){
    let salario = us.salario ? `R$ ${us.salario}` : "N/A"
    console.log(`${us.nome}, ${us.idade} anos, ${us.ocupacao}, salario ${salario}`)
}

info(usuario2)