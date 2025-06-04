 let obj = {
    name: "rohan",
    age:23,
    gender:"male",
    city:"kotdwar"
};

// obj.toString()

// for in Loop     Object ke uper

// Yes, for...in loop in JavaScript is specifically used to iterate over the enumerable properties (keys) of an object.

// ❌ Don’t use for...in for:
// Arrays → Use for, for...of, or forEach() instead, because for...in can return unexpected keys.

// for...in works on objects, not arrays (though technically it works on arrays too, but not recommended).

// It iterates keys (property names), not values directly.

for(let key in obj)  //  key = var ka name kuch bhi de skte hai
    console.log(key);

// 2 for in loop , I can iterate over keys in an object


// 3*************** access values *************
 
// for(let key in obj)
// {
//     console.log(key, obj[key]);
// }

// // Object.keys(obj)
// console.log(Object.keys(obj));


// 4 *************diff between loop key acces or normal key acces

// normal me inharit  key acces not posible 

// creat protoytye clone
let obj2 = Object.create(obj);
obj2.money = 420;
obj2.id = "Roh";
// console.log(obj2);
console.log(Object.keys(obj2));

// obj2 key  sirf obj2 ke under ki property ko acces krega


// Inharit key access posible 
// for(let key in obj2)
// {
//     console.log(key);
// }


// Ojbect.portotype 