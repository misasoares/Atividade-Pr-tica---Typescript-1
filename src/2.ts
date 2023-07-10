// // 2. Crie uma função que receba uma lista de objetos contendo nota e
// // peso, realize a média das notas considerando o peso. Exemplos:
// // Lista com 2 notas: (N1*P1) + (N2*P2) / 2 = Resultado
// // Lista com 3 notas: (N1*P1) + (N2*P2) + (N3*P3) / 3 = Resultado

interface NotaPeso {
    nota:number
    peso:number
}

function calcularMediaPonderada(notasPesos:NotaPeso[]){
    let somaNotas = 0
    let somaPesos = 0

    for(let {nota,peso} of notasPesos){
        somaNotas += nota * peso
        somaPesos += peso
    }
    return somaNotas/somaPesos
}

let notasPesos:NotaPeso[] = [
    {nota:5, peso:3},
    {nota:10, peso:1},
    {nota:4, peso:4},
    {nota:10, peso:2}
]
let media = calcularMediaPonderada(notasPesos)
console.log(`A média ponderada é: ` + media)
