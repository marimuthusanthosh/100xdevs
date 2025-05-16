"use strict";
class Employee {
    constructor(n, a) {
        this.name = n,
            this.age = a;
    }
    greet(phrase) {
        console.log(`${phrase} ${this.name}`);
    }
}
const e = new Employee("Harkirat", 22);
console.log(e.name);
