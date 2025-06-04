 // let obj = {};

// obj.name = "Rohit";
// obj.age = 20;
// key, value, writable, enumerable, configurable or by defoult teno ture hote hai and by defoult add hote hai objct ke sath

// console.log(Object.getOwnPropertyDescriptor(obj,'name'));

// //  writable = True , value ko kya mein change kar sakta hu yes value change hogi but ager writable false huaa to value change nhi hogi ok

// obj.name = "Mohit"

// // configurable = True ho to writable, enumerable , or configruable ki values ko change kr skte hai but false hua to teno ki values ko change nhi kr skte hai


let obj = {};


// Object.defineProperty(obj, 'name', {
//     value:"rohit",
//     writable:true,
//     enumerable:true,
//     configurable:true,
// })

// customize kr skte hai

// Object.defineProperty(obj, "name",{
//     writable:false,
// })

// obj.name = "mohit";


// console.log(obj);

// const obj1 = {
//     name:"rohit",
//     age:23,
//     account_number:30001
// };

// Object.defineProperty(obj1, 'account_number',{
//     writable:false
// })



// obj1.account_number = 20001;
// console.log(obj1.account_number);

// const customer = {
//     name:"Rohit",
//     age:23,
//     account_number:123,
//     balance:2000,
// }


// name , account_number , change nahi hone chaiye

// Object.defineProperty(customer, "name",{
//    writable:false,
// })
// customer.name = "Mohit";
// // customer.account_number = 10001; 

// console.log(customer);


//************ Enumerable ********** */
//  Object.protoype se inharit kr rha hai ye ro main Question ye hai ye object.prototye ki value ko print kyoo nhi kr ta hai kyo ki unki key ka enumarable false hota hai by difoult ok
const customer = {  // ye obj bhi property inharit krtahia obj.prto se
    name:"Rohit",
    age:23,
    account_number:123,
    balance:2000,
}

// for(let key in customer) 
//     console.log(key);



// // ****** profe kyo nhi acces ho rahi object.protoype
// console.log(Object.getOwnPropertyDescriptor(customer,"name"))
// //******* */ that is reasion for not printing a key ok
// console.log(Object.getOwnPropertyDescriptor(Object.prototype,"toString"))



// copey creat hoga isse 
// let customer2 = Object.create(customer);
// customer2.city = "Haridwar";
// customer2.place = "Delhi";

// Object.defineProperty(customer, "name", {
//     enumerable:false,
// })

// 5 ********enumerable: jis bhi key ka enumerable true hga, un sabka acces hga ya print hga

//  Inherit hoke bhi koi bhi property or key aati hai , uska enumerbale true hua toh wo bhio print hga

// for(let key in customer)
//     console.log(key);



// console.log(Object.getOwnPropertyDescriptor(Object.prototype , 'toString'));
Object.defineProperty(Object.prototype,'toString',{
    enumerable:true,
} )

for(let key in customer)
    console.log(key);



 