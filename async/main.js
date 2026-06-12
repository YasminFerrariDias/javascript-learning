import { timeout } from "./setTimeout.js"
import { interval } from "./setInterval.js"
import { asyncFunction } from "./asyncFunction.js"
import { prioritizeOrder } from "./executionOrder.js"

console.log("FUNÇÕES ASSINCRONAS")

async function execute() {
  console.log("# setTimeout() - retorna após um determinado tempo")
  await timeout()

  console.log("# setInterval() - retorna em um determinado tempo")
  await interval()

  console.log("Executando função assíncrona...")
  await asyncFunction().then((response) => {
    console.log("Sucesso:", response)
  }) 
  .catch((error) => {
    console.log("Erro:", error)
  })
  .finally(() => {
    console.log("Fim da Execução")
  })

  console.log(`# Prioridade e ordem de execução`)
  prioritizeOrder()
}

execute()
