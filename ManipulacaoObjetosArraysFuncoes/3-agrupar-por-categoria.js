const items = [
  { name: "Banana", category: "fruta" },
  { name: "Carne", category: "proteina" },
  { name: "Maçã", category: "fruta" },
];

function groupByCategory(items) {
  const resultado = {
    frutas: items.filter((item) => item.category === "fruta"),
    proteina: items.filter((item) => item.category === "proteina"),
  };

  console.log(resultado.frutas);
}

function GroupByCategory() {
    
    const result = Object.groupBy(items, ({category}) => category)
    console.log(result)
    
//   items.reduce(
//     (acumulador, valorAtual, indice) => {
//      Object.assign(acumulador, acumulador[valorAtual.category])
//     // acumulador[valorAtual.category].push(valorAtual.name)
//       console.log(acumulador)
     
//       return acumulador
//     },
//     {},
//   );
}


groupByCategory(items);
