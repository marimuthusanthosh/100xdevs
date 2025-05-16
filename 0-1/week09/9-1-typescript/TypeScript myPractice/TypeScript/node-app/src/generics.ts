
// type Input =number|string; 

function firstElement<T>(arr:T[]): T{
  return arr[0];
}

const value=firstElement<string>(["Marimuthu", "Santhosh"]);

console.log(value.toUpperCase()) 

// function Identity<T>(args: T) {
//   return args;
// }
// let output1 = Identity<string>("myString");  // T is string
// let output2 = Identity<number>(100);         // T is number
// console.log( output1); // string
// console.log( output2); // number
