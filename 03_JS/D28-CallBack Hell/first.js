
// // callback Hell

// // callback function

// A callback is a functon passed as an argument to another function

// function fetchuser(){
//     console.log("Fetching the user Detail.....");
    
//     setTimeout(() => {
//         console.log("Date fetched succesfully")
//         const name = 'kuldeepbahi'
//         // greet(name);
//         meet(name);
//     }, 2000);
// }

// function greet(name){
//     // console.log('Hello Everyone');
//     console.log(`Hello ${name}`)
// }

// function meet(name){
//     console.log(`Hello ${name}, I willl meet you in Delhi`)
// }
// fetchuser();





// // callback function use krnse banifit 
// function fetchuser(callback){
//     console.log("Fetching the user Detail.....");
    
//     setTimeout(() => {
//         console.log("Date fetched succesfully")
//         const name = 'kuldeepbahi'
//         callback(name);
//     }, 2000);
// }

// function greet(name){
//     // console.log('Hello Everyone');
//     console.log(`Hello ${name}`)
// }

// function meet(name){
//     console.log(`Hello ${name}, I willl meet you in Delhi`)
// }

// function edit(name){
//     console.log(`Edit ${name}, of tbe user`)
// }
// // fetchuser(greet);
// // fetchuser(meet);
// fetchuser(edit);

// same code ko multiple time istemal krstke hai 




// c******************allback function use krnse banifit 
function fetchdata(callback){
    console.log("Fetch info of a user");
    
    setTimeout(() => {
        console.log("user detail fectched succesfully")
     
        const obj = {
            name: 'rohit',
            age: 39,
            city: 'delhi',
        }
        // Data fetched from backend
        callback(obj);
    }, 2000);
}

function greet(obj){
    // console.log('Hello Everyone');
    console.log(`Hello ${obj.name}`)
}

function meet(obj){
    console.log(`Hello ${obj.name}, I willl meet you in Delhi`)
}

function edit(obj){
    console.log(`Edit ${obj.name}, of tbe user`)
}

function printAge(obj){
    console.log(`User ${obj.age}`)
}

fetchdata(greet);
// fetchuser(meet);
// fetchuser(edit);

// problem
// user data fatched :
// const obj = {
//     name: 'rohit',
//     age: 39,
//     city: 'delhi';
// }

// 1: greet
// 2: meet
// 3: edit
// 4: age
// ye 4 funtionality kese achiv kr skte hai