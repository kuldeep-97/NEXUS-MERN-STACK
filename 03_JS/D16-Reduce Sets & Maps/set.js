/* Set 
   A set in js is a 
   Cellection of unice values . and it allows you to store values without duplicates, whic makes it different from arrays. the values in a set can be any type  such as primitives ( number str ,etc )or objects 
   
   * Add
   * Delete
   * Has 
   * Size
   * clear
   
   Set is an object type (class) for storing unique values.

   🔹 Set is a built-in object/class
   🔹 Used via a constructor function → new Set()
   🔹 Result is an object storing unique values
*/

// In JavaScript, Set is a built-in object, not a function — but it's used like a constructor function with the new keyword.


// let arr = [10,20,10,30,10]
// set : unique value

const sets = new Set([10,20,30,40,10,30,90]);
// console.log(typeof sets);
console.log(sets)


// second way to declary set 

// const set1 = new Set();
// set1.add(4);
// set1.add(6);
// set1.add("Rohit");
// set1.add(30);

// // delete
// set1.delete(6);

// console.log(set1.size);


// ############# Hash property ############
// ig:id

// const user_id = new Set(["rohit_negi9","Mohi_91","ravi.93","chavi_90","sumit._90"]);
// let new_user = "rohit_negi9";
// console.log(user_id.has(new_user));

// user_id.clear();
// console.log(user_id);


// ########### Arr ko set me convet ###############

// let arr = [10,30,20,10,40,50,30];
// const set1 = new Set(arr);

// ########## Set ko vapes arr me convet ############# 

// arr = [...set1];     //sprat oprator : set ke under se ek ek kr ke sari value bahar nikal ta hai or arr me add krta hai 
// console.log(arr);


// ######## unioun : dublicat values nhi aati hai ########
// Sprat oprator me values ek ek kr ke bahar nikalti hai

let set1 = new Set([10,20,30,40,50]);
let set2 = new Set([10,20,70,40]);

// let set3 = new Set([...set1,...set2]);
// console.log(set3);

// ############### intersection : jo coman values hoti hai vo ###
// filter: array
 
// const result =  new Set([...set1].filter((num)=>set2.has(num)));

// [...set1].filter((num)=>set2.has(num))

// console.log(result)


// ############## Iterate over set
// for of: iterator
// for(let value of set1)
//     console.log(value);

// for each 
set1.forEach((value)=>console.log(value));


