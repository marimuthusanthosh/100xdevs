"use strict";
;
function sumOfAge(user1, user2) {
    return user1.age + user2.age;
}
const age = sumOfAge({
    name: "John", age: 30
}, { name: "Jane", age: 25 });
console.log(`The sum of ages is: ${age}`); // Output: The sum of ages is: 55
