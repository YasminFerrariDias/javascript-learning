// Demonstra herança entre classes com extends, compartilhando métodos da classe pai.
class Animal {
  constructor(name){
    this.name = name
  }

  makeNoise() {
    console.log("Algum som genérico do animal")
  }
}

class Dog extends Animal {

}

const dog = new Dog()
dog.makeNoise()

class Cat extends Animal {

}

const cat = new Cat()
cat.makeNoise()
