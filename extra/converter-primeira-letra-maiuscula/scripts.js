const texto = "CONVERTER ESTE TEXTO PARA MAIÚSCULA SÓ A PRIMEIRA LETRA";
const texto2 = "converta esse texto agora";
const texto3 = "TExto coM CarAcTereS MISTUradoS"

function capitalizeFirst(str) {
  const subst = str.toLowerCase().replace(/(?:^|\s)\w/g, function (a) {
    return a.toUpperCase();
  });

  return subst;
}

console.log(capitalizeFirst(texto));
console.log(capitalizeFirst(texto2));
console.log(capitalizeFirst(texto3));
