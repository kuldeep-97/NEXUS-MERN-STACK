
// JS is a single threaded synchronous language:
// threaded: ek hi time pe ek hi task execute hota hai 
// synchronous: mtlab ek ke bad ek task execut hote hai

// JS bheaviour: Asynchronous bhai hai

//*****synchronous***** */
// console.log('10');
// console.log('20');
// console.log('30');

//*****Asynchronous*****ko achiv kr skte hai */
// console.log('10');

// setTimeout(() => {        // this is a Asynconous task
//     console.log('20');   // setTimeout js ka part nhi hai 
// }, 2000);               // ye web API ka part hai

// console.log('30');

// single threaded: One task will be executed at a time;



console.log('10');

const timer = Date.now();
// console.log(timer);
// timer older time

while(Date.now()-timer<2000){  // this a syncronous task
    // wait for 2 second
}
console.log('20');
console.log('30');