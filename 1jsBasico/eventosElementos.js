const ul = document.querySelector("ul")

ul.addEventListener("scroll", (event) => {

  // Mostra o evento toda vez que ocorre interação com o scroll
  // console.log(event)
  
  // Mostra a distancia do scroll com o topo
  console.log(ul.scrollTop)
  
  // Quando chegar ao final ele retona ao inicio
  if (ul.scrollTop > 300) {
    ul.scrollTo({
      top: 0,
      // comportamento: suave (restona devagar)
      behavior: "smooth"
    })
  }
})

const button = document.querySelector("button")
button.addEventListener("click", (event) => {
  event.preventDefault()
  console.log("Clicouuu")
})
