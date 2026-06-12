// Conta a quantidade de ocorrências de cada elemento em um array usando reduce.
const letters = ["a", "b", "a", "c", "b", "a"];

function countOccurrences(letters) {
  console.log(letters);
  const result = letters.reduce((accumulator, value) => {
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
