export class UserInfo {
   fistName: string

   lastName: string

   constructor(message: string) {
     this.fistName = message
     this.lastName = message
   }
}
export class Greeter {
  greeting: string

  constructor(message: string) {
    this.greeting = message
  }

  greet() {
    return `Hello, ${this.greeting}`
  }
}
