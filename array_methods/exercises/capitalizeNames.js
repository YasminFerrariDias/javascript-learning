// Capitaliza a primeira letra de cada palavra em um array de nomes usando map e replace.
const names = ["ana", "luiz", "carla"];

function capitalizeAll(names) {
  const upperCase = names.map((name) => {
    const current = name.toLowerCase().replace(/(?:^|\s)\w/g, function (a) {
      return a.toUpperCase();
    });
    return current;
  });

  return upperCase;
}

console.log(capitalizeAll(names));
