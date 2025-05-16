type User1 = {
  firstName: string;
  lastName: string;
  age: number;
};

function isLegal1(user: User1) :string {
  if (user.age > 18) {
    return "legal";
  } else {
    return "illegal";
  }
}

const x = isLegal1({
  firstName: "Marimuthu",
  lastName: "Santhosh",
  age: 20
});

console.log(x);
