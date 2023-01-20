let num = [5,8,2,9,3]
num.push(7) // acrescenta um numero na ultima pocisão
num.sort() // Classifica por ordem numeria
console.log (num) // Mostra o vertor
console.log(`O vetor tem ${num.length} posições`) // num.length indica qts posições tem o vetor
console.log(`O primeiro vertor é ${num[0]}`)
let pos = num.indexOf(4) // Busca o vlr e retorna a posição dentro do vetor
if (pos == -1) {
    console.log('O valor não foi encontrado')
} else {
    console.log(`O valor 2 está na posição ${pos}`)
}
    