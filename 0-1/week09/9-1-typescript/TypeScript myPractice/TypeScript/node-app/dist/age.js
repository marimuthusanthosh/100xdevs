"use strict";
function isLegal(user) {
    if (user.age > 18) {
        console.log(user.firstName + " " + user.secondName);
    }
}
isLegal({
    firstName: "Marimuthu",
    secondName: "Santhosh",
    age: 20
});
