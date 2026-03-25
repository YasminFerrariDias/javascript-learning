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

// function groupByCategory(items) {
//   return items.reduce((acc, item, index) => {
//     console.log("----");
//     console.log("Item atual:", item);
//     console.log("Acumulador antes:", acc);

//     // se não existe a categoria, cria
//     if (!acc[item.category]) {
//       console.log(`Criando categoria: ${item.category}`);
//       acc[item.category] = [];
//     }

//     // adiciona o nome
//     acc[item.category].push(item.name);

//     console.log("Acumulador depois:", acc);

//     return acc;
//   }, {});
// }

/*
  items.map((item) => {
    const {name, category} = const
    console.log(item)
    console.log(category)
    console.log(name)
  })

  console.log(frutas)
  console.log(category)

  console.log(items)*/

groupByCategory(items);
