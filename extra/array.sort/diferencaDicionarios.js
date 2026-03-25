// Diferença de paises - entre dicionarios

const base = ['Z', "a", 'z', 'ä']
// em alemão
console.log(base.slice().sort(new Intl.Collator('de').compare))
// em sueco
const idiomaSueco = new Intl.Collator('sv');
console.log(base.slice().sort(idiomaSueco.compare))

console.log(new Intl.Collator('pt-BR').compare('a', 'B'))
