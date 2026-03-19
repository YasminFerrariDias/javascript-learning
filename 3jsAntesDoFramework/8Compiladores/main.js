class User {
  constructor({ email }) {
    this.email = email
  }

  sendMessage(){
    console.log("A mensagem foi enviada para:", this.email)
  }
}

let user = new User({ email: "rodrigo@email.com" })
user.sendMessage()
