  /**
 * Map is a Collection of key-value pairs where both the keys and values can be any data type (primitive or object). unlike regular js objects . a map maintains the order of its elemetns based on insertion and allows keys of any type (even obe )
 */

//  key value pair: key should be unique
// ######## 1st method to creat map #######

// const map1 = new Map();
// map1.set(3,90);
// map1.set("Rohit",45);
// map1.set(20,"Mohan");
// // map1.set("Rohit",40); value ko update karegab/ unic key

// map1.delete(3);
// map1.has('rohit')

// // console.log(map1);
// console.log(map1.has("Rohit"));
// console.log(map1.size);
// map1.clear();
// console.log(map1);


// ####### Map creat 2nd method ##############
const map1 = new Map([
    [4,"rohit"],
    ["Moahn","rohan"],
    [30,9], [63,78]
]);

// console.log(map1);

// ######## for of loop #########

// for(let value of map1)
//     console.log(value);

// Destructue 
// for(let [key,value] of map1)
//     console.log(key, value);


// console.log(map1["4"]);


// Object:
// keys: string or symbol
// maps:
// keys:number, string, object


// Javascript code kaise execute hota hai......