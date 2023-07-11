// // 1. Crie uma função que receba 2 números e retorne um objeto
// // contendo a média e também um indicador booleano de
// // aprovado/reprovado. Considere aprovado com média >= 6.


type Aluno = {
    media:number
    aprovado:boolean
}

function calcularMedia(n1:number, n2:number){
    let m = (n1+n2)/2
    let ap = m>=6
    let aluno:Aluno = {
        media:m,
        aprovado:ap
    }
    return aluno
}
let aluno1 = calcularMedia(3,3)
console.log(aluno1)