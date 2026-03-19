// setInterval() - executa uma função em um intervalo de tempo especificado 

export function interval() {
  return new Promise((resolve) => {
    let value = 10 

  const interval = setInterval(() => {
  console.log(value)
  value--

    if (value === 0) {
      console.log("FELIZ ANO NOVO!!!")

      // Interrompe o intervalo de execuções
      clearInterval(interval)
      resolve()
    }
  }, 1000)
  })
}
