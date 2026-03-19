class Animal {
  constructor(name){
    this.name = name
  }

  makeNoise() {
    console.log("Algum som genérico do animal")
  }
}


class Dog extends Animal {
  makeNoise() {
    console.log("Woof! Woof! Woof!")
  }
}

const dog = new Dog()
dog.makeNoise()

class Cat extends Animal {
  makeNoise() {
    console.log("Miau... Miau... Miau...")
  }

  run() {
    console.log("Correndo...")
  }
}

const cat = new Cat()
cat.makeNoise()
cat.run()
