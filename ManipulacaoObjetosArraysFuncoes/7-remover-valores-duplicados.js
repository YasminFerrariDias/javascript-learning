const nums = [5, 3, 5, 2, 3, 9];

function unique(nums) {
  console.log(nums)
  // se eu posso verificar um por um comparando, da pra tentar fazer o mesmo pra ver se já existe
  const result = nums.reduce((accumulator, value) => {
    // TESTE para ver o que retornava
    //console.log("ACUMULADOR", accumulator);
    //console.log("VALOR", value);
    
    // tentei usar nesta parte o findIndex(), mas ia tornar o código mais dificil e não tinha necessidade
    // tive dificuldade para entender como eu comparo um valor sozinho com um valor dentro do array
    // tentei de varias formas, no fim era só usar um includes, também demorei para entender como que eu ia colocar o valor dentro do array que já exitia
    return accumulator.includes(value) ? accumulator : [...accumulator, value]
  }, []);
  console.log(result)
}


function unique(nums) {
    const uniqueNumbers = new Set(nums)
  console.log(uniqueNumbers)
}

unique(nums)
