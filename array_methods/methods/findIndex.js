// FindIndex()
// Retorna o indice no array do primeiro elemento que satisfazer a condição. 
// Caso contrário, retorna -1, indicando que nenhum elemento passou no teste

const values = [4, 6, 8, 12]

// Obtendo o primeiro indice do elemento que o valor é maior do que 4
console.log(values.findIndex((value) => value > 4))
console.log(index)
console.log(values[index])

// Exemplo de quando não se encontra
console.log(values.findIndex((value) => value > 12))
