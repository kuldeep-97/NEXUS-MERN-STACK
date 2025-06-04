let nums:number = 10;
let nume:number = 20;
let num:number = 30;

let x  = 39; //outo matic gess kr lega isko hii type inference khte hai
x = 30;

let money;

money = 30;
money = "kull";

console.log(money.toUpperCase());

let val2:unknown;

val2 = 20;
val2 = "kuldeep";
console.log(val2);

if(typeof val2 === 'string')
console.log(val2.toUpperCase());
if(typeof val2 == 'number')
console.log(val2.toFixed());


// Non Primitive

let arr:number[] = [1,3,5,6,7,7];
let arr2 = [2,4,6,7,8];

// Mixed type arr
let arr3 = ["kuldee", 3,6,7,3,2, "kumawat"];
let arr4:(string |  number)[] = ["kuldee",2,4,6, "kumawawt"];
    arr4.push(28);

 let arr5:(string | number | boolean)[] = ["kuldeep" ,10,false]   

 let tuple2:[string,number,number] = ["kuldeep",10,11]


 // object
 // TypeInfrance Hover krme pr show all deteals
let obj1 = {
    name: "kuldeep",
    age: 20,
    gender: "male",
}
// Inline obj
let obj2:{name:string,age:number,gender:string}= {
    name: "kuldeep",
    age: 20,
    gender: "male",
}

let person :{name:string,age:number,balance:number}

person = {
    name:"kuldeep",
    age:29,
    balance:200,
}

let n1:number;
n1 = 10;  

type customer = {
    name: string,
    age:number,
    id:number,
}

let c1 : customer = {
    name:"kuldeep",
    age:20,
    id:900,
}

type n1 = {naem:string,aeg:number,gender:string}

let obj5:n1 = {
    naem:"kul",
    aeg:39,
    gender:"male",
}

interface admin {// use interface for TS Higly Recomendet and optimazi hota hai  
    name:string,
    age:number,
    position:string,
}

interface admin { // strong marging system
    id:number
}

let obj6: admin = { 
    name:"kuldepe",
    age:93,
    position:"manger",
    id:39,
}

// HW
// Interface vs Type
// Function
// Classes


