
// callbackHell

// async task
// fetch()
// weather EX : 


//  console.log(3+4);

// const obj = fetch(`http://api.weatherapi.com/v1/current.json?key=62a1734d952f4a31a84143920252702&q=London&aqi=yes`)
// fetch api ko pending me dal dega or isko web api solve krega then next steg pe move hoga

console.log(obj) // Ans : promise {pending} : X
// ye Asyncronush task hai 
// fetch opration execute hone ke liye kuch time lega or iske liye waite krna pdega ok


// console.log(8*3);




// // Not a right way to print Api data ********

// const obj = fetch(`http://api.weatherapi.com/v1/current.json?key=62a1734d952f4a31a84143920252702&q=London&aqi=yes`)

// // setTimeout(() => {
// //     console.log(obj); 
// // }, 2000);




// // Right way to print API data ********

// const obj = fetch(`http://api.weatherapi.com/v1/current.json?key=62a1734d952f4a31a84143920252702&q=London&aqi=yes`)

// // obj hee promiss hai | obj === promise
// obj.then((data)=>{
//     console.log(data);
// })




// const Promises = fetch(`http://api.weatherapi.com/v1/current.json?key=62a1734d952f4a31a84143920252702&q=London&aqi=yes`)

// 1) method promiss printing

// obj hee promiss hai   
// Promises.then((response)=>{ 
//     console.log(response);
// }).catch((error)=>{        // error handling ke liye
//     console.log(error);
// })

// promises ki 3 states hoti Hai : 
//    1) pending : initilay
//    2) resolve : request fulfill
//    3) reject : failiar message 

//Methods : .then(), .catch(), .finally()




// 2) method promiss printing ************

const Promises = fetch(`http://api.weatherapi.com/v1/current.json?key=62a1734d952f4a31a84143920252702&q=London&aqi=yes`)

// Promises.then((response)=>{ 
//   console.log(response.json()) // Ans : promise {pending} : X
//  const prom2 = response.json(); // Handle 

//     prom2.then((data)=>{
//         console.log(data);
//     })
// })

// ########### JSON me Convet krna bhai ek Async Task hai ######
//    ye ek  bar me execute nhi hoga time lagega isko bhi 





// 3) method promiss printing *******

// const prom2 = Promises.then((response)=>{ 
//     return response.json();
// })

// prom2.then((data)=>{
//     console.log(data);
// })




// 4) method promiss printing ************

// ******* Promiss chaning ***************

//  Promises.then((response)=>{ 
//     return response.json();
// }).then((data)=>{
//     console.log(data);
// })



// 5) method promiss printing

// more sort format
// Promises
// .then(response=>response.json())
// .then(data=>console.log(data));



// 6) method promiss printing
 fetch(`http://api.weatherapi.com/v1/current.json?key=62a1734d952f4a31a84143920252702&q=London&aqi=yes`)
 .then(Response=>Response.json())
 .then(data=>console.log(data.current.temp_f))
 .catch((error)=>console.log(error));
 
// json: java script object notation ek format hia jo bhi roww fome data ataa hai usko json me convet kr dete hai and ye Response Body part lake deta hai or ye object  hii hai

//*** Pormise ki 3 (state) request hoti hai ****
// Pending  resolve  reject  */


// console.log(3+4);
// // Normaliy print 
// console.log(obj);
// // pirnt kyo nhi horha kyo ki ye ek Async task hai or print hone ke liye kuch samay lega or iske liye waith hi nhi kiya hai normal printing me
// console.log(4*4);
