// let obj1 = {
//     a:1,
//     b:2
// }


// // shallow copy
// let obj2 = obj1;
// obj2.a=10;
// console.log(obj2, obj1);

// //  deep copy 
// let obj3 = structuredClone(obj1);
// obj3.a = 20;
// console.log(obj3, obj1);


// //    Nested object
// const user = {
//     name:"Rohit",  // Deep copy 
//     balance: 420,
//     address: {
//         pincode: 246149,  // sell copy
//         city: "kotdwar"
//     }
// }

// // console.log(user.address.pincode);
// //  structureclone // Sab ke deep copy creat kraga ok

// // Assign and copy creat
// assing deep copy to creat krega but Nested vale deep copy do not work and deep copy only work in without nested object ok

// Assingn se deep copy only creat a notmal object and nested object creat a seell copy 

// const user2 = Object.assign({},user);
// console.log(user2);
// user2.address.pincode = 321314;
// console.log(user.address.pincode);




//  Destructruing of an object
//  kuch values ko indivsualiy nikalna 
// let obj = {
//     name: "Rohit",
//     money: 430,
//     balance: 30,
//     age: 20,
//     aadhar: "hfdsiohsai"
// };

// function call me most ursefull or react me bhi
// const {name, balance, age} = obj;
// name changes 
// const {name:full_name , balance: amount, age:Umar} = obj;
// const {name, age,...obj1} = obj;
// console.log(obj1);

// const arr = [3,2,1,5,10];
// const [first,second] = arr;
// const [first,second, ,third] = arr;
// const [first,second,...third] = arr;
// console.log(third);


// Destructruing of Nested obj
// let obj = {
//         name: "Rohit",
//         age: 20,
//         arr: [90,40,60,80], // hw pritn first value
//         address: {
//             pincode:246149,
//             city:"Kotdwar",
//             state: "uk"
//         }
// };

// const{address:add} = obj;
// const {address:{pincode, city}} = obj;

// const {arr: [first]} = obj;
// console.log(first);



// Diff between Rest & Sprat oprator
// new variable bnaa usme sari value dal do ye hai reast oprator
// spart oprator oll redy exist object hote hai vaha lagta hai


let user = {
    name: "Rohit",
    amount: 420,
    greet: function(){
        // console.log("Hello COder Army");
        return "Hello coder army"
    },
    meet: function(){
        return 20;
    }
}

// user.greet();
console.log(user.greet());
console.log(user.meet());


// Interview most importent quetion 
// Prototype chaining
const arr = [10,39,49];
arr.__proto__

const arr2 = new Array[20,44,59,59]
arr2
arr2.push(10);

let obj = {
    a : 1,
    b : 2,
}

// let obj = {
//     name:"Rohit",
//     amount:420,
//     greet: function(){
//         return 10;
//     }
// }


// console.log(obj.toString())
// // arr is an object
// let arr = [2,3,1,8];
// arr.push(10); // ye property aa kha se rhi hai

// const a = [2,3,4,5]
// undefined
// a.__proto__


// const obj = {a:1,b:2}
// undefined
// obj.__proto__

// obj.toString()
// '[object Object]'



// // Hw
// // 2) Object.freeze()

// JavaScript mein Object.freeze() ek method hai jo kisi object ko immutable (unchangeable) banane ke liye istemal hota hai. Jab aap kisi object ko freeze karte hain, to us object mein koi bhi changes nahi kiye ja sakte hain. Yeh changes include:

// Naye properties add karna: Freeze kiye gaye object mein nayi properties add nahi ki ja sakti.

// Existing properties ko modify karna: Freeze kiye gaye object ki existing properties ki values ko change nahi kiya ja sakta.

// Properties ko delete karna: Freeze kiye gaye object ki properties ko delete nahi kiya ja sakta.

// const obj = {
//     name: "John",
//     age: 30
//   };
  
//   // Object ko freeze karna
//   Object.freeze(obj);
  
//   // Nayi property add karne ki koshish
//   obj.city = "New York"; // Error nahi ayega, lekin city add nahi hogi
  
//   // Existing property ko modify karne ki koshish
//   obj.age = 40; // Error nahi ayega, lekin age change nahi hogi
  
//   // Property delete karne ki koshish
//   delete obj.name; // Error nahi ayega, lekin name delete nahi hoga
  
//   console.log(obj); // Output: { name: "John", age: 30 }

// Important Points:
// Object.freeze() shallow freeze karta hai, matlab agar object ke andar koi aur objects hain (nested objects), to unhe freeze nahi kiya jata. Unhe alag se freeze karna padta hai.

// Agar aap kisi frozen object ko change karne ki koshish karte hain, to strict mode ("use strict") mein error throw hoga, otherwise silently fail ho jayega.

// Nested Objects ko Freeze karna:
// Agar aap nested objects ko bhi freeze karna chahte hain, to aapko recursively Object.freeze() ko call karna hoga.

// const obj = {
//     name: "John",
//     details: {
//       age: 30,
//       city: "New York"
//     }
//   };
  
//   // Object ko freeze karna
//   Object.freeze(obj);
  
//   // Nested object ko freeze karna
//   Object.freeze(obj.details);
  
//   // Ab koi bhi changes nahi honge
//   obj.details.age = 40; // Error nahi ayega, lekin age change nahi hogi
  
//   console.log(obj); // Output: { name: "John", details: { age: 30, city: "New York" } }

// Conclusion:
// Object.freeze() ka istemal tab kiya jata hai jab aap chahte hain ki kisi object ki structure aur uski values ko koi bhi change na kar sake. Ye method object ko immutable banane ka ek tarika hai.



// 2) object.seed()

