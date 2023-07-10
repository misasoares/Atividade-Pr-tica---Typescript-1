"use strict";
// // 3. Crie um programa que simule uma carteira de dinheiro. Este
// // programa vai precisar ter uma carteira contendo saldo, transações
// // de entrada e saídas. Ou seja, será um objeto com estas
// // propriedades. Depois crie uma função para lançar uma entrada e
// // uma saída. Caso ao lançar uma saída e não tiver saldo, precisa dar
// // um erro ou avisar.
class Carteira {
    constructor() {
        this.saldo = 0;
        this.transacoes = [];
    }
    mostrarSaldo() {
        return this.saldo;
    }
    adicionarEntrada(valor) {
        this.saldo = +valor;
        this.transacoes.push(valor);
    }
    adicionarSaida(valor) {
        if (this.saldo < valor) {
            console.log("Saldo insuficiente");
        }
        this.saldo -= valor;
        this.transacoes.push(-valor);
    }
    exibirTransacoes() {
        console.log("Transações:");
        for (let transacao of this.transacoes) {
            console.log(transacao > 0 ? `+${transacao}` : transacao);
        }
    }
}
const carteira1 = new Carteira();
console.log(`Saldo inicial: ${carteira1.mostrarSaldo()}`);
carteira1.adicionarEntrada(100);
console.log(`Saldo após entrada: ${carteira1.mostrarSaldo()}`);
carteira1.adicionarSaida(20);
console.log(`Saldo após saída: ${carteira1.mostrarSaldo()}`);
carteira1.adicionarSaida(90); //gerar erro
console.log(`Saldo atual: ${carteira1.mostrarSaldo()}`);
