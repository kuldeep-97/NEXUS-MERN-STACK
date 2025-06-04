// // globalobject: object
// globale object ko har ek envairment name alag alag hoga  
// // Chrome Browser: window
// // Nodejs: global
// // globalThis : use every envariment : ye globle object ko point krta hai inrepective of evairment ok

// globle object advantag : bina goble object name liee bhi normal obj ko acccess kr skte hai
// goble obhect jinko koi bhi kabhi bhi acces kr skta hai 

// console.log("Hello World"); // ye sab fn aa kha se rhe hai 
// console.log(Math.random());
// // setInterval();
// // new Object();
// //  new String("Rohit");

// // let obj = {
// //     name:"Rohit",
// //     age:12
// // };
// // obj.name

// console.log(globalThis.Math.random());
"use strict"


// a = 10;
// console.log(a);

let obj = {
    name:10  
}

Object.freeze(obj);
obj.name = 30;
console.log(obj);



let a = 29;
const b = 39; // globle scop part hai  but globle object ka part nhi bnenge ok

var c = 30; // globle object ka part bnte hia ok
console.log(this.c);

console.log(window);   // globle scop part 
console.log(this);
console.log(this===window);


// har ek invarment me globle object ka ek alag name hota hai
// like : Braowser me : window hai 
// Node.js me : globle 
// confusing hai code ke liye 

// console.log(window.Math.random()); // error : kyo ki node.js nhi smhjta hai window ko vo sirf globle ko smjhta hai

// console.log(global.Math.random());

// Then badd me ek orgnaization ne is prolem ko andestend kra or globle object ke liye har ek invarment me comman ho isliye ek new keyword difine kiya jiska name : globlethis rkha 


// this : globle object ka part hota hai our point krta hai globle object ko ok and iska diff diffrent context (envairment) me alag alage mening hota hai 


// strict Mode : rules high follw hote hai 


// Ex : "use strict" : bug less reduce buges 

 a  = 20;
 console.log(a);


"use strict" // dbugin is easy 

let obj = {
    name: 29,
}

Object.freeze(obj);
    obj.name = 39;
    console.log(obj);