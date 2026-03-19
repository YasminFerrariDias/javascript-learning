// Rest Params (...) permite representar um número indefinido de argumento como um array

console.log("Aplicando Rest Params")
function values ( ...rest) { // rest ou args
  // Mostra a quantidade de parâmetro
  console.log(rest.length)

  // Exibe o conteúdo do array
  console.log(...rest)

  // Exibe o conteúdo do rest que é um array
  console.log(rest)
}

values(2, 1, 3)
