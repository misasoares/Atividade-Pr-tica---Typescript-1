"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// // 4. Crie um programa para cadastrar, listar e excluir produtos de uma
// // lista com tipagem de Produto.
const produtos_1 = require("./produtos");
//cadastrar
function cadastrar(produto) {
    produtos_1.produtos.push(produto);
    console.log(produtos_1.produtos);
    console.log(`Existe um total de: ${produtos_1.produtos.length} produtos.`);
}
const novoProduto = { nome: "Novo produto", tipo: "Novo produto" };
cadastrar(novoProduto);
//listar por tipo
function listar(produto) {
    let result = produtos_1.produtos.filter(e => e.tipo.includes(produto));
    console.log(result);
    console.log(`Existe um total de ${result.length} ${produto}.`);
}
listar("brinquedo");
//excluir por nome
function excluir(produto) {
    let index = produtos_1.produtos.findIndex(e => e.nome === produto);
    produtos_1.produtos.splice(index, 1);
    console.log(produtos_1.produtos);
}
excluir("Leite");
