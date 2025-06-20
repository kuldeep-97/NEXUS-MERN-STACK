
// The this keyword in JavaScript is a special keyword that refers to 
// the context in which the current code is being executed. 
// Its value depends on how the function where this is used is called.


// 1: Global Context (Outside Any Function)
// In browsers: window 
// In Node.js: Module's exports object 


// console.log(this);






// ****************************************************************


// 2:Inside a Function 
// i: (Non-Strict Mode)
// When this is used inside a regular function, it refers to the global object.

// ii: Strict Mode : high rules 
// Strict mode vo mode hota hai js me joo js ke Rules and Regulation ye kaffi high ho jate hai js write krne ke lye
// bydefoult js follow non strict mode
// this will be undefined inside a function.


//  Adv of This keyword
// Non strict Mode : me this keyword  bydefult point windo object ko ** or ** Strict Mode me undifend ko point krega ok

"use strict"
// function greet(){
//     console.log(this);
// }

// greet();
// window.greet();

// ****************************************************************

// 3: Inside a Method (Object Context)
// When this is used inside an object’s method, it refers to the object that owns the method.

// const obj ={
//     name:"Rohit",
//     age:20,
//     meet: function(){
//        console.log(this.name); // insi a method this point obj 
//     }
// }

// obj.meet();




// ****************************************************************

// Arrow functions don’t have their own this. 
// Instead, they inherit this from the surrounding (lexical) scope.

// let obj = {
//     name:"rohit",
//     age:11,
//     greet: ()=>{
//         console.log(this);
//     }
// }

// obj.greet();


// let obj = {
//     name:"rohit",
//     age:11,
//     greet: function(){
        
//         let ab = ()=>{
//             console.log(this);
//         };

//         ab();

//    }
// }

// obj.greet ();



// ********************************************************?

// Inside a Constructor or Class
// In constructors and classes, this refers to the instance of the object being created.

// normal method 
// a.name = "rohit"
// advance method
// this.name = "kuldep"

// class Person{
//     constructor(name,age){
//         this.name = name;
//         this.age = age;
//     }
// }



// let a = new Person("Rohit", 20);
// console.log(a);



// let greet = ()=>{
//     console.log(this);
// }

// greet();




"use strict"

let meet = function(){
    console.log(this);
}

meet();




