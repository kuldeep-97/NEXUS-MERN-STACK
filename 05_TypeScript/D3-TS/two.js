"use strict";
// classes in TS
class persion {
    constructor(n1, n2) {
        this.name = n1;
        this.age = n2;
    }
    greet() {
        console.log(`h1 ${this.name}`);
    }
}
// Blueprint of an object
const obj0 = new persion("Rhoit", 20);
console.log(obj0);
const obj7 = new persion("kuleep", 22);
console.log(obj7);
console.log(obj0.name);
//console.log(obj7.greet());
obj0.greet();
// Public  Private Protected = TS me hai but
// js ke under sirf public hi hota hai private or protected nhi hota hai
class customer {
    constructor(name, agee, balance) {
        this.name = name;
        this.agee = agee;
        this.balance = balance;
    }
}
const P1 = new customer("deepak", 20, 394);
console.log(P1);
console.log(P1.name);
console.log(P1.agee);
console.log(P1.balance);
