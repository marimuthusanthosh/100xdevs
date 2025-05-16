"use strict";
function isLegal1(user) {
    if (user.age > 18) {
        return "legal";
    }
    else {
        return "illegal";
    }
}
const x = isLegal1({
    firstName: "Marimuthu",
    lastName: "Santhosh",
    age: 20
});
console.log(x);
