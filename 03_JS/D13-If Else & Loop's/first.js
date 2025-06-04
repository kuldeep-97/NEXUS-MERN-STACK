//  scope ke baare mein
// Global scope , local scope(Functional scope) , block scope

// let a = 10;
// var b = 20;
// const c = 30;
// Global scope wale 


// local scope(Functional scope)

// function greet(){
//     let a = 10;
//     var b = 20;
//     const c = 30;
//     console.log("Hello Function");
//     console.log(a,b,c);
// };

// greet();
// console.log(c);

// block scope

// var amount = 400;
// var amount = 20;
// var amount = 10;

// var block scope ke under se bhi accses ho rha hai or same name ke multiple variable bhi allow kr rha hai

// if(true){
//     let a = 10;
//     var b = 29;
//     // var amount = 20;
//     const c = 30;  
// }

// console.log(amount);

// for(let i=0;i<5;i++){
//     console.log(i);
// }

// console.log(i);


// console.log(c);
// let amount = 20;
// const b= 30;
// var c = 50;

// if(true){
//     let amount =30;
//     console.log(amount);
// }

// greet();




function greet(){
    console.log("Hello Greet");
}


// meet(); not allowd
const meet = function(){
    console.log("Hello Meet");
}








