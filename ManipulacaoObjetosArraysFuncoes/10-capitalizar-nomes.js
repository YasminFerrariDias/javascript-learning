 const names = ["ana", "luiz", "carla"];

function capitalizeAll(names) {
  const upperCase = names.map((name) => {
    // LEMBRETE: Salva e retorna ela
    const current = name.toLowerCase().replace(/(?:^|\s)\w/g, function(a) {
      return a.toUpperCase()
    })

    return current
  })

  return upperCase
}

console.log(capitalizeAll(names))
