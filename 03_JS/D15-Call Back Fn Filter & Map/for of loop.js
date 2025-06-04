// Miss conseption all over the internet

// let user= {
//     name:"rohit",
//     age:30
// }


// console.log(Object.getOwnPropertyDescritor(user,"name"))
// Object.defineProperty(user, 'name',{
//     writable:false,
// });

// user.name = "mohit";
// // Hacking se bachne ke liye humeine ye sab kiya hai
// nhi ye galat hai ye  line 
// console.log(Object.getOwnPropertyDescriptor(user, "name"))


// ***************** for of loop ****************

// specific values ko print krwata hai
// Dairect value ko acces krta hai 
const arr = [10,20,11,18,13];
for(let valdne of arr)
{
    console.log(valdne);
}


// ###### sida value ke uper acces leta hai or ek ek kr ke value ko nikal ta hai or printn krta hai 

// let str = "Rohit is Good Boy";
// for(let value of str)
// {
//     console.log(value);
// }

// ######## NOte don't use for of loop in object
// REasion object or not itrable or iske liye simble.itratalbe impliment nhi ho rka hai obj ke liye 

// ####### Or object ka main(basic) role chijo koo store kr ke rkhna hai or ek ke bad ek nhi ja skte 

//###### Object Itratable nhi hote hai 

// ## Arry ke liye itrator define hota hai code base me but obj ke liye nhi hota 

// #### Simble.itratalbe obj ke liye define nhi hai

// const obj = {
//     2:5,
//     1:3,
//     name:"Chavvi",
//     age:22,
//     gender:"female"
// };

// console.log(obj);

// for(let value of obj){
//     console.log(value);
// }
                        // values
// for(let value of Object.keys(obj))
//     console.log(value, obj[value]);
