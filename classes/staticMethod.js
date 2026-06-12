// Demonstra métodos estáticos em classes, que são chamados diretamente na classe sem instanciar.
class User {
  static showMessage(message) {
    console.log(message)
  }
}

// const user = new User()
// user.showMessage()

User.showMessage("Essa é uma mensagem") 
