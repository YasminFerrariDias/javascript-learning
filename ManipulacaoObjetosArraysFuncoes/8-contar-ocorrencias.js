// DIFICULTADES
// entender o que é objeto, o que é array - e como utilizar cada uma
// entender quando se usa comparação, quando é retorno 

const letters = ["a", "b", "a", "c", "b", "a"];

function countOccurrences(letters) {
  console.log(letters);
  const result = letters.reduce((accumulator, value) => {
    // TESTE para ver o que retornava
    console.log("ACUMULADOR", accumulator);
    console.log("VALOR", value);

    if (accumulator[value]) {
      accumulator[value] += 1;
    } else {
      accumulator[value] = 1;
    }

    return accumulator
  }, {});
  console.log(result);
}

countOccurrences(letters);
