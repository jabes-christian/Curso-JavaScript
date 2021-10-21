let num = [6, 8, 5, 4, 1, 3, 7]
num.sort()
//Ex 1 = for
for (let pos=0; pos < num.length; pos++) {
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}
//Ex 2 = for
for (let pos in num) {
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}
