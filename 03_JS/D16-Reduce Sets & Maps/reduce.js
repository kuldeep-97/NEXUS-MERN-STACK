//  reduce

//🔹 What is reduce()?
// The reduce() method reduces an array to a single value by applying a function to each element of the array (from left to right).


// reduce format
// ek result opten krna 
// // const result = arr.reduce(callback function, initialization)

// 🔸 Syntax:

// array.reduce((accumulator, currentValue) => {
//   // logic
//   return newAccumulator;
// }, initialValue);

// accumulator: holds the result of previous computations.

// currentValue: the current item being processed. : curr me vo value ati hai jo array se ayegi ok

// initialValue: the starting value (often 0, {}, [], etc.)

// Ek REsult optain krna 

const arr = [10,20,30,40,50];

const result = arr.reduce((acc,curr)=>{
    // console.log(acc,curr)
    acc = acc+curr;
    return acc;
},0)
// const result = arr.reduce((acc,curr)=> acc+curr, 0);

// console.log(result);

// for parameter
// const result = arr.reduce((acc,curr,index,arr)=> acc+curr, 0);


// Real wordl use case
let arr1 = ["orange","apple","banana","orange","apple","banana","orange","grapes"];
//  final result ek object ke form
// orange:3
// apple:2
// acc = {
// orange:2,
// apple:2,
// banana:1}

// const result = arr.reduce((acc,curr)=>{
    // kya acc ke under orange hai
//     if(acc.hasOwnProperty(curr))
//         acc[curr]++;
//     else
//       acc[curr]=1;    //acc = { curr: 1 } | acc["orange"] = 1;

//     return acc;
// },{}) 


// Even if curr = "orange", this will not create orange key — it creates "curr".

// ######### Not undestend this to refer a  first.js ok

const result1 = arr.reduce((acc,curr)=>{
    
    // sort cut hai but esha nhi likhte hai redablity iss ke karn
    acc.hasOwnProperty(curr) ? acc[curr]++ : acc[curr]=1;

    // ? true 
    // : False 

    return acc;
},{})

console.log(result);






// 🔹 Summary:
// Feature            	reduce()

// Purpose	       Reduce array to a single value
// Return value	   Anything (number, array, object, string, etc.)
// Modifies original?      	❌ No, returns a new value
// Useful for	         Sums, totals, grouping, flattening, etc.