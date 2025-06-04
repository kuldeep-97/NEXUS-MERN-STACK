// // ek esha function jo ki aap pass krskte ho as a argument in another function ok


// const calcuate =  (a,b, operation) =>{
//     return operation(a,b);
// };

// /// method 1

// /// function call or function pass krna diffrent hota hai
// /// callback function me hmesa function pass kiya jata hai as a argument to another function ok
// const addition = calcuate(3,4, function (num1,num2){
//       return num1 + num2;
// });

// console.log(addition);


// /// method 2
// const subtraction = (a,b)=> a-b;

// const subResult = calcuate(8,3,subtraction);

// console.log(subResult);

// /// method 3
// function multiply(a,b){
//     return a*b;
// }

// const mulResult = calcuate(3,5,multiply);
// console.log(mulResult);



/// ******practicaly kha use hota hai ye callback function******** 

const arr = [4, 1, 6, -5, 3, 2, -8, 6, 7];

arr.forEach((num,index)=>{
     console.log(num, index);
})