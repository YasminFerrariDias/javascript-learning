const products = [
  { name: "Mouse", price: 80 },
  { name: "Teclado", price: 150 },
  { name: "Monitor", price: 1200 },
];

let total = 0;

function somaProdutos() {
  products.forEach((preco) => {
    total += preco.price;
  });
}
console.log(total);

function getTotal(products) {
  // Desestrutura os valores do array, deixa o name separado o price
  const [{ name, price }] = products;
  // Teste para ver se retornava o valor de price sozinho
  // console.log("Preço:", price)

  // Definindo os parâmetros necessarios
  const product = products.reduce((accumulator, { price }) => {
    // Teste para verse retornava os valores certos
    // console.log("ACUMULADOR", accumulator);
    // console.log("PREÇO", price);

    // A cada volta ele acrescenta o "novo" valor no acumulador
    return (value = accumulator + price);
    // 0 - da onde vai começar a verificação
  }, 0);

  // Precisa chamar o ultimo valor fora, para ser executado uma vez e mostrar o valor correto
  console.log(value);
}

// outras formas de resolver
function somaProdutos() {
  products.forEach((preco) => {
    total += preco.price;
  });

  console.log(total);
}

function somarProdutos2() {
  for (i = 0; i <= products.length; i++) {
    total += products[i].price;
    i++;
  }
  console.log(total);
}

getTotal(products);
