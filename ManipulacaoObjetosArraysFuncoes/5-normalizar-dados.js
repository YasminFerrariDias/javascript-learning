const data = [
  { id: 1, name: "Cadeira" },
  { id: 2, name: "Mesa" },
];

function normalize(data) {
  const normal = data.reduce((accumulator, value) => {
    accumulator[value.id] = value.name;

    return accumulator;
  }, {});

  console.log(normal);
  return normal;
}

normalize(data);
