"use strict";
const abj = {
    name: "lull",
    age: 38,
    gender: "male",
};
// Use of Partial
// All Property Becomes Optional
const obj1 = {
    name: "kuldeep",
    balance: 399,
};
// Use of Required
// All Property Should be Filled
const obj2 = {
    name: "kuldeep",
    balance: 399,
    age: 39,
};
// Use of Red Only
// The property can only be read , Write option is not avlable
const obj3 = {
    name: "kuldeep",
    balance: 399,
    age: 88,
};
const arr = [{ name: "kuldp", age: 21, }, { name: "monhit", age: 18 }];
// function in TS
//Optional hai but aachii habbit hoti hai khid se mation krna
function greet(a) {
    console.log(a);
    return a + 5;
}
console.log(greet(10));
function meet(msg, val) {
    console.log(msg, val);
}
meet('anshika vermaj', 5);
// const arr1 = [{name:"kuld",age:30,},{name:"mohit",age:19,},{salary:399,id:"39992"}]
const arr1 = [{ name: "kuld", age: 30, }, { name: "mohit", age: 19, }, { salary: 399, id: "39992" }];
// Defoult parameter
function neet(msg = "jit") {
    console.log(msg);
}
neet();
neet("kuolee");
//  optional perameter
function GATE(persion) {
    console.log(persion || "kumawat");
}
GATE("Rohit");
GATE();
// Arrow funtion
const sum = (a, b) => {
    return a + b;
};
console.log(sum(3, 5));
// Callback function
(amount) => {
    console.log(amount);
};
function palceOrder(order, Callback) {
    const amount = order + 10;
    Callback(amount);
}
palceOrder(10, (amount) => {
    console.log(amount);
});
//Rest Parameter   
function total(...arr) {
    let ans = 0;
    arr.forEach((val) => ans = ans + val);
    console.log(ans);
}
total(1, 2, 4, 5, 6, 7, 88);
const objj = {
    name: "Rohit",
    age: 20,
    salary: "chillar",
    id: 233,
};
