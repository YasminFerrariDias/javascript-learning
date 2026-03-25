const array = ["b", "x", "A", "a", "B"];

teste = array.sort();
console.log(teste);

const newArray = array.sort((a, b) => {
  return a.toLowerCase() > b.toLocaleLowerCase() ? 1 : -1;
})
console.log(newArray)

const newArray2 = array.sort((a, b) => {
  if (a.toLowerCase() > b.toLowerCase()) {
    return 1;
  } else if (b.toLowerCase() > a.toLowerCase()) {
    return -1
  }
  return 0;
})
console.log(newArray2)

const myDates = [new Date('12/12/1990'), new Date('10/10/2010')]
new Date()
console.log(Date())


const myArray = [10, 2, 5]
// faz um calculo de subtração, quando diminuem o tamanho, 
// conseguem ver qual é maior, qual é menor - assim ordenam "automaticamente"
const mArray = myArray.sort((a, b) => a - b)
console.log(mArray)
