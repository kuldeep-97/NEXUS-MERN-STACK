// call back function

// A callback function is a function that Is passed as an argument to another function 
// Is invoked /exequre ("called back") at a later time, usually after an asynchronous operation completes or an event occurs.

// ek funtion ke under as an  argument  kisi or function ko bejna hi call back function hota hai

//Callback function वह function है जो:

// किसी दूसरे function को parameter के रूप में दिया जाता है

// Asynchronous operations (जैसे file read, API call) के complete होने पर execute होता है

// Event handling में भी use होता है (जैसे button click पर)

// Asynchronous Operations
// Event Handling
// Array Methods

// सुझाई गई सही परिभाषा:
// "A callback function is a function passed as an argument to another function, which is then executed after a specific operation completes or an event occurs."

// हिंदी में:
// "Callback function एक ऐसा function है जो दूसरे function में argument के रूप में दिया जाता है, और किसी specific operation (जैसे async काम पूरा होने या event घटित होने) पर execute होता है।"




function names(fun){
    console.log("Hello I am name");
    fun();
}

// function greet(){
//     console.log("I am call back funct")
// }

const greet = function (){
    console.log("I am call Back Function");
}

// names(greet);


// ************ Use Case  or Vizualizetion **************

function names(fun){
    console.log("Hello I am name");
    fun();
}

names(
function greet(){
    console.log("I am call back funct")
});

// ************************************************************

// names(function (){
//     console.log("I am call Back Function");
// });


// names(()=>{
//     console.log("I am call Back Function");
// });

// REal work use case
 
// function fetchData(){
//     // bhut saara 
//     console.log("I am fetching data");
// }

// setInterval(fetchData,5000);

// setInterval()   : usr define fun call 



