
// Promise Creat 

function test1(){

     const p1 = new Promise(function(resolve,reject_){
    setTimeout(() => {
        resolve("first promise resolve ");
    }, 5000); // 5000
})
   return p1;
}



function test2(){
 
// p1 p2 code sath me hone se perallal me chal rhe hoi ok
const p2 = new Promise(function(resolve,reject_){
    setTimeout(() => {
        resolve("second promise resolve");
    }, 5000);
})

  return p2
}



async function greet() {

    console.log("Hello I great you")
    const data = await test1();  // isko resolve hone me 5sec lgenge to isko microtask queue rkha deta hai and resolve hone pr yahi se continew hoga ok
    console.log(data)
  
   
    const data2 = await test2(); // 5 sec 
    console.log(data2) 
    

}
 
greet();
 
// main thraed
console.log("Hello coder Army");
console.log("kaise ho app sab log")


// sabi promise perallel me run krne ke liye 
// jo promise ek dusre pe depend nhi hai unko ek sath execute kra skte hai 
async function greet() {

    console.log("Hello I great you")
    const [data,data2] = await Promise.all([test1(),test2()])  
    console.log(data)
    console.log(data2)
}

// Maicrotask queue 
// callback queue   

// Promise need and how to remeber promise :