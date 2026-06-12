export function asyncFunction() {
  return new Promise((resolve, reject) => {
    // Simula uma operação assíncrona
    setTimeout (() => {
      const isSuccess = true

      if (isSuccess) {
        resolve("A operação foi concluída com sucesso!")
      } else {
        reject("Algo deu errado!")
      }
    }, 3000) // Simula uma operação que leva 3 segundos
  })
}
