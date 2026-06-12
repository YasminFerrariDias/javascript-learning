// Ordena um array de jogadores por score em ordem decrescente usando sort.
const players = [
  { name: "João", score: 12 },
  { name: "Pedro", score: 8 },
  { name: "Lucas", score: 20 }
];

function sortByScore(players) { 
  const order = players.sort((a, b) => b.score - a.score)
  return console.log(order)
}

sortByScore(players)
