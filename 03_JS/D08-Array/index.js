 const arr = [2,35,1,8,9,"rohit",true,8];
// console.log(arr[1]);
// console.log(arr.at(-2));
// at ka advantag
// // at is latest, negative index le leta hai or se start hota hai
// console.log(arr.length);
// // length
// // helpful

// const newarr1 = arr;
// console.log(newarr1==arr);
// consdition both arrya point alag alag kre dono copy alog ho
// const newarr = structuredClone(arr);
// console.log(newarr==arr);


// push, add element at end

// arr.push(30);
// arr.push(50);
// console.log(arr);

// // pop , pop the last element from array
// arr.pop();
// arr.pop();
// arr.pop();
// console.log(arr);

// // unshift , add element at start

// arr.unshift(10);
// arr.unshift(30);
// console.log(arr);

// // shift, delete element from start
// // [2,35,1,8,9,"rohit"];
// arr.shift();
// console.log(arr);

// // delete operation 
// iske disadvantage bhi hai jeses ki delete hone ke bad bhi space reseved rkhta hai
// // [hole,2,35,1,8,9,"rohit"];
// delete arr[0];
// console.log(arr);

// console.log(arr);
// console.log(arr.indexOf(8))
// console.log(arr.lastIndexOf(8));
// console.log(arr.includes(10));

// slice  /* not changes in orignal array 

// console.log(arr);
// let a = arr.slice(2,5);
// console.log(a);
// console.log(arr);

// splice   // changes in orignale array ok

// console.log(arr);
// console.log(arr.splice(2,5));
// console.log(arr);

// console.log(arr);
// let newsplice = arr.splice(2,5);
// console.log(newsplice);
// console.log(arr);

// splice(starting_index,total_element_delete,add value)
// arr.splice(2,3);
// arr.splice(2,3,"money",90);
// arr.splice(2,0,"money",90);// delete na krna ho to
// console.log(arr);

// convet into a string
// console.log(arr.toString());
// console.log(arr.join("*")); // advantage hai , ki jgh * likh skte hai


// concatina  
// let arr1 = [2,35];
// let arr2 = [5,12];
// let arr4 = [23,432,1123,31];
// let arr3 = arr1.concat(arr2,arr4);
// console.log(arr);
// console.log(arr3[6]);
// arr1.push(arr4);
// console.log(arr1[2][0]);

// 2d array
let arr1 = [1,2,3,4,5,6,7,8,9];
let arr2D = [[1,2,3],[2,3,5],[4,5,6]];
let arr3d = [[1,2,3,[23,432,123,[331,123,123]]],[4,5,6],[7,8,9]];

// flat ka use to convert into 1d array
// 2d array ko 1d me convet 
let newarr = arr2d.flat();//1 2 3 ya Infinity
// [1,2,3]
// [4,5,6]
// [7,8,9]
console.log(newarr);


// sprat oprator se ...


// man lo backend se kuch aaya to conform krna haii ki kya aaya hai
// array he hai kuch or hai ye conformation krta hai 
let abc = [2,1,4,1];
console.log(Array.isArray(abc));

// let ac = new Array(10); //not recomanded method
// console.log(ac.length);

