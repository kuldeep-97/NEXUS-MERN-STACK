// how to create object
// const obj = {
//    0:20,  // 0 key bhi as a string hi store hota hai
//    1:50,
//    2:70, 
//    name:"rohit", 
//    account_balance:420,
//    gender: "Male",
//    age: 30,
//    "account number": 231230,
//    undefined: 30,
//    null:"mohan",
// }

// console.log(obj);
// console.log(obj["undefined"]); // undefind covert hoga string me
// console.log(obj["null"]); // acces is yes

const insta = {
    insta_id: "kuldeep_97", // jo key hoti hai vo Backend me as a string store hoti hai "insta_id"
    password: "Bhaiyaji",
}

// Accesing Object Properites

// console.log(obj.name); // obj acces 1st way
// console.log(obj.gender);
// console.log(obj["account_balance"]); // obj acces 2nd way
// console.log(obj["account number"]);
// console.log(obj['0']);
// console.log(obj[1]); // obj acces 3rd way
// console.log(obj[2]);
// console.log(obj);



// const arr = [20,50,70];
// console.log(arr);
// console.log(arr[1],obj[1])

// Array internal implimentaion
// const arr = {
//     0:29,
//     1:50,
//     2:58,
//     length:3,
// }



// second mathod to creat a obj
//-> this method are not usee 
//  second method to create

// const person = new Object();
// console.log(person); // Empty object 

// // property add
// person.name = "Rohit";
// person.age = 80;
// person.gender = "Male";
// console.log(person);

// // delete
// delete person.age;
// console.log(person);

// // Modify or update
// person.name = "Mohit";
// console.log(person);


// third method to creat a obj

// class People{ // ek bar koi chij likh do or bar bar use kro 
//     constructor(na, ag, gen){  // Creat Krna or Momory allocat krna or insialize krna etc
//         this.name = na;     // normal way without this 
//         this.age = ag;      // per1.name = "rohit",
//         this.gender = gen;  // per1.age = 20,
//     }                       // per1.gender = "male".
// }

// this per1 ko point kr rha hai

// let per1 = new People("Rohit", 20, "Male");
// Advanteg ye hai ki dura obj creat krne ke kamm code likha pdta hai ok
// let per2 = new People("Mohit", 30, "Female")
// let per3 = new People("Aman", 21, "Male")
// console.log(per1, per2);



// Common Methods For Objects

let obj = {
    name: "rohit",
    age:30,
    account_balance:420,
    gender:"male"
};

const arrr = Object.keys(obj);
console.log(arrr);
//  keys , values
const arr = Object.values(obj);
// console.log(arr);

// keys; value dono sath me chiye
const arr2 = Object.entries(obj); // Ek array ke type me melaga
// console.log(arr2);

// assign use case
const obj1 = {a:1,b:2};
const obj2 = {c:3,d:4};
const obj4= {e:5,f:6};

                        // Target //Source
const obj3 = Object.assign({},obj1,obj2,obj4); 
                     // or jo bhi source chnages hoge vo target me addon kr dena ok
// console.log(obj1.a);
// sprat oprator ...name
const obj5 = {...obj1,...obj2,...obj4};
console.log(obj5);

// Advantage or disadvantag for assingn and sprat






