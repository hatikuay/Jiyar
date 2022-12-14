class Person {
  constructor(private name: string) {}
  private message: string;

  get Message() {
    if (!this.message.includes(this.name)) {
      throw Error("message is missng speaker's name");
    }
    return this.message;
  }

  set Message(val: string) {
    let tmpMessage = val;
    if (!val.includes(this.name)) {
      tmpMessage = this.name + " " + val;
    }
    this.message = tmpMessage;
  }
}

const tom = new Person("john");
tom.Message = "hello";

tom.Message
