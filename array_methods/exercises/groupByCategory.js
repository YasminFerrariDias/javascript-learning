// Agrupa itens de um array por categoria usando filter e Object.groupBy.
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
}

groupByCategory(items);
