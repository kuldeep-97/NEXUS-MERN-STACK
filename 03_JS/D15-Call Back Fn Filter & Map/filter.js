// *********** filter ************

// *****filter ek function hai jo data ko filterout krne me help krta ha

// .filter() is a function (method) in JavaScript that helps you filter out elements from an array based on a condition. 
// .filter() returns a new array that contains only the elements for which the callback function returns true.


array.filter(function(element, index, array) {
  return condition;
});

// 🟡 Key Points:
// Works only on arrays.

// Returns a new array, original array stays unchanged.

// Commonly used for searching, removing items, filtering based on user input, etc.


// data ko filter out krne help krta hai
// true or false hi retrun kr skte hai

 let arr1 = [10,22,33,41,50];

// const resul = arr1.filter(function (num){
//     return num%2==0;
// })

const resul = arr1.filter((num)=>{
    return num%2==0;
})
// console.log(resul)

// const result = arr.filter((num)=> num%2==0);

// console.log(result);

// Example
// const students = [
//     {name:"Rohan", age:22, marks:70},
//     {name:"Mohan", age:24, marks:80},
//     {name:"Darshan", age:28, marks:30},
//     {name:"Mohit", age:32, marks:40},
//     {name:"Shadik", age:12, marks:90},
// ]

// const result = students.filter((value)=> value.marks >50);
// const result = students.filter(({marks})=> marks >50);

// console.log(result);
