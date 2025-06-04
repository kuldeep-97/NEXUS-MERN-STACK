
 
// 3 **************** forEach *****************

// isko smjhne se phle class back fun smjho

// work in arr string isme key value both are print and aslo print in arr
// for eeach me kuchh bhi return nhi hota hai

let arr2 = [10,20,30,40,50];
//  single argument: number
//  second index
//  third: array ko bhi pass

// arr.forEach(CallBackFunction)

        // 1st method / triak 
// const greet = function (num){
//     console.log(num);
// }

//   arr.forEach(greet)


        // 2st method / triak 
// arr.forEach(function (num){
//     console.log(num);
// });
        
        // 3st method / triak 
// arr.forEach((num)=>{
//     console.log(num)
// })

       // 4st method / triak    
// arr.forEach((num)=>console.log(num))

      // 5st method / triak 
// arr.forEach(num=>console.log(num))




let arrr = [10,30,49,59,50]

// forEach(number, index, arry)
// Single argument : number
// second argument : index
// thrid arguemtn : arry 

// arrr.forEach((num,index)=>console.log(num,index));

// arrr.forEach((num,index)=>console.log(num,index));

// arrr.forEach((index,num,ar)=>{
//     console.log(index,num)
// });

// arr.forEach((num,index,a) => {
//     a[index] = num*2;
// });

// console.log(arr);


function greet(num){
    console.log(num)
}

arrr.forEach(greet)
