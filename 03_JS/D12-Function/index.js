// Function

// function greet(){
//     console.log("Hello Coder Army");
//     console.log("Mein badiya hu");
//     console.log("Aur Kya chal rha hai");
// }

// greet();
// greet();
// greet();

// add program

// parameter
// function sum(number1 , number2){
//     console.log(number1+number2)
// };

// // function call: argument
// sum(3,4);  
// sum(10,15);


// Multiplication: function

// function multiply(number1 , number2)
// {
//     // console.log(number1*number2);
//     return number1*number2;
// }

// let result = multiply(4,5);
// console.log(result);

// 2nd method do functon 

// const fun = function(){
//     console.log("Hello Coder Army");
//     console.log("Mein toh badiya hu");
//     return "Money";

//     // console.log("aur kya chal rha");
// }

// console.log(fun());



//  Arrow function  ..most usefull

const fun = ()=>{
    console.log("Helooo")
}
  fun();

   
// const sum = (number1, number2)=>{
//    return number1+number2;
// }

// Advantage return likhne ki jrurat nhi hai
// const sum = (number1, number2) => number1+number2 ;

// console.log(sum(3,4));

// const cube = number => number*number*number;

// console.log(cube(8));


//  spread operator or rest operator
// let arr = [2,3,4,5];

//  let arr2 = [...arr]; rest operator
// spred mtlab value ko bahar nikalna

// const sum = function(...number){
//     // for loop sum nikal sakta hu
//    console.log(number);
// }

// sum(2,3,4);
// sum(4,6,1,10,13);
// sum(2,3);


let obj = {
    name: "Rohit",
    age:30,
    amount:420,
}

// const {name , amount} = obj;
// console.log(name,amount);
// Homework pass by value or pass by reference

//  function fun(obj){
//     const {name,amout} = obj;
//     console.log(name,amout);
//  }

// function fun({name, amount}){
//    console.log(name , amount);
// }

// fun(obj);


// function love(obj1){
//     console.log(obj1);
// }

// love(obj);


let obj1 = {
    a:1,
    b:2,
}

let obj2 = {
    c:1,
    d:2,
}


obj2 = Object.create(obj1);

// obj2.__proto__ = obj1;
// console.log(obj2.__proto__)









