let num = [5, 2, 3, 8, 9]
num [5] = 4
num.push(7)
num.sort()
console.log(`Nosso vetor é o ${num}`)
console.log(`O vetor tem ${num.length} posições`)
let pos = num.indexOf(8)
if (pos == -1) {
    console.log('O valor não foi encontrado!')
} else {
    console.log(`O valor 8 está na posição ${pos}`)
}

