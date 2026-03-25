 const players = [
  { name: "João", score: 12 },
  { name: "Pedro", score: 8 },
  { name: "Lucas", score: 20 }
];

function sortByScore(players) { 
  // achei que precisava desestruturar o players,para usar o score separado
  // const [{name, score}] = players

  // não precisava, posso definir o que é para "comparar"
  const order = players.sort((a, b) => b.score - a.score)

  // se assim deixa em ordem crescente, se trocar a ordem fica decrescente, ou seja, o maior fica na frente
  // const order = players.sort((a, b) => a.score - b.score)
  return console.log(order)
}

sortByScore(players)
