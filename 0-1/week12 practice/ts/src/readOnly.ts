type User ={

  readonly name: string;
  readonly age: number;
}

const user: Readonly<User> = {
  name: "John",
  age: 30
}

// user.age=12;  