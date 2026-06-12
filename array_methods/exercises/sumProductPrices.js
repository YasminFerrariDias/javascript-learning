// Soma o preço de todos os produtos usando forEach e reduce, com variações de implementação.
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
  const [{ name, price }] = products;

  const product = products.reduce((accumulator, { price }) => {
    return (value = accumulator + price);
  }, 0);

  console.log(value);
}

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
