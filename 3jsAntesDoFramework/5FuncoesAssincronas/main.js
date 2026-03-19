import { timeout } from "./setTimeout.js"
import { interval } from "./setInterval.js"
import { asyncFunction } from "./asyncFunction.js"
import { prioritizeOrder } from "./ordemExecucao.js"

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

  console.log(`# Prioridade e ordem de execução - 
    Foi colocado 5 números em ordem, vai ser executado conforme a necessidade.`)
  prioritizeOrder()
}

execute()
