// // 4. Crie um programa para cadastrar, listar e excluir produtos de uma
// // lista com tipagem de Produto.
import { produtos } from "./produtos"
// //importei "produtos"

interface produto {
    nome:string
    tipo:string
}

//cadastrar
function cadastrar(produto:produto){
    produtos.push(produto)
    console.log(produtos)
    console.log(`Existe um total de: ${produtos.length} produtos.`)
}

const novoProduto = {nome: "Novo produto", tipo:"Novo produto"}
cadastrar(novoProduto)

//listar por tipo
function listar(produto:string){
    let result = produtos.filter(e => e.tipo.includes(produto))
    console.log(result);
    console.log(`Existe um total de ${result.length} ${produto}.`);
}

listar("brinquedo")

//excluir por nome
function excluir(produto:string){
    let index = produtos.findIndex(e=> e.nome === produto)
    produtos.splice(index, 1)
    console.log(produtos);   
}

excluir("Leite")