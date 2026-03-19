// Utilizando o fetch com then
/* fetch("http://localhost:3333/products")
  .then((response) => response.json())
  .then((data) => console.log(data)) */

// Utilizando o fetch com async/await - RECOMENDADO
async function fetchProduct() {
  const response = await fetch("http://localhost:3333/products")
  const data = await response.json()
  console.log(data)
}

async function fetchProductById(id) {
  const response = await fetch(`http://localhost:3333/products/${id}`)
  const data = await response.json()
  console.log(data)
}

const name = document.getElementById("name")
const price = document.getElementById("price")
const form = document.getElementsByTagName("form")

addEventListener("submit", async (event) => {
  event.preventDefault()

  await fetch("http://localhost:3333/products", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      id: new Date().getTime().toString(),
      name: name.value,
      price: price.value,
    })
  })
})

//fetchProduct()
//fetchProductById("3")
