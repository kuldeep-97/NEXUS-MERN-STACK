
// Promise Creat 

const p1 = new Promise(function(resolve,reject_){
    setTimeout(() => {
        resolve("first promise resolve ");
    }, 8000); // 5000
})

// p1 p2 code sath me hone se perallal me chal rhe hoi ok
const p2 = new Promise(function(resolve,reject_){
    setTimeout(() => {
        resolve("second promise resolve");
    }, 5000);
})


// Promise Consume

// console.log(p1) // dairect consume nhi kr skte : pending state hoti hai 

// wait then consum ok
// p1
// .then(resolve=>console.log(resolve));



// Async await se Promise consume

// async function greet() {
//     const data = await p1;
//     console.log(data)
// }

// greet();



// async function greet() {
//     const data = await p1;  // 8 sec
//     console.log(data)

//     const data2 = await p1; // 5 sec 
//     console.log(data2) 
//      // Hello Everyone
//     //Hello Everyone : ispe wait nhi kiya koki ye olredy phle se resolve data hai ok not perallaler comuting ok
// }
 
// greet();
 


p1.then(value=>console.log(value))
p2.then(value=>console.log(value))