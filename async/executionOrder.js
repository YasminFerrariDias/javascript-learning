export function prioritizeOrder() {
  console.log("1 - (1) executa o código de forma síncrona e o valor 1 é impresso imediatamente no console")

  queueMicrotask(() => {
    console.log("2 - Microtasks são executadas antes de temporizadores e promessas")
  })

  setTimeout(() => {
    console.log("3 - (5) macrotask que aguarda o evento de temporizador ser acionado")
  }, 1000)

  console.log("4 - (2) execução síncrona")

  Promise.resolve(true).then(() => {
    console.log("5 - (4) adiciona uma microtask")
  })
}