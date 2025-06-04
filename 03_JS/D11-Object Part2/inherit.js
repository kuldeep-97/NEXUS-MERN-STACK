// hoo kesi rhi hai ye sari cheje

let user1 = {
    name: "Rohit",
    age: 20,
}



let user2 = {
    amount:20,
    money:50
}

console.log(user.amount)
console.log(user.name) // not acces


user2.__proto__ = user1;
console.log(user.name) // acces


let arr = [10,20,30,40];
console.log(arr.__proto__== Array.prototype)
console.log(arr.__proto__.__proto__== Object.prototype)
console.log(arr.__proto__.__proto__.__proto__== null)


// Arrary.prototye 