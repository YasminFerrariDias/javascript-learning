// Demonstra a diferença de ordenação de strings entre idiomas usando Intl.Collator.
const base = ['Z', "a", 'z', 'ä']

console.log(base.slice().sort(new Intl.Collator('de').compare))

const idiomaSueco = new Intl.Collator('sv');
console.log(base.slice().sort(idiomaSueco.compare))

console.log(new Intl.Collator('pt-BR').compare('a', 'B'))
