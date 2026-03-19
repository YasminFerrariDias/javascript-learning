// setTimeout() - executa uma função após um intervalo de tempo especificado

export function timeout() {
  return new Promise((resolve) => {
    setTimeout (() => {
      console.log("Olá, tudo bem?")
      resolve()
    }, 3000) // tempo em milissegundos
  })
}
