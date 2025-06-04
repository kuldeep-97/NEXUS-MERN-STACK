

// call back Hell

// callback = ()=>{
//     preParingOrder();
// }

// callback();

// EX: Domino's pizza order Kar rahe no
    function placeOrder(callback){
        console.log('Talking with Dominos');

        // real world fill ke liye  use kra hai
        setTimeout(() => {
            console.log('order palced succesfully');
            callback();
        }, 2000);
    }
    // placeOrder();

function preParingOrder(callback){
    console.log('Pizaa preparation started....');

        setTimeout(() => {
            console.log('Pizaa preparton Done');
            callback();
        }, 5000);
}
// preParingOrder();

function pickupOrder(callback){
    console.log('Reaching restourant for picking order');

    setTimeout(() => {
        console.log('Picked up the order by Delivery boy')
        callback();
    }, 3000);
}
// pickupOrder();

function deliverOrder(){
    console.log('Delivery boy on the way ');

    setTimeout(() => {
        console.log('Order Deliverd succesfully')
    }, 5000);
}

// placeOrder(preParingOrder);

placeOrder(() =>{
    preParingOrder(()=>{
        pickupOrder(()=>{  // this a callback Hell
            deliverOrder();
        });
    })
}); // code rediblutiy is very bad

// starting a promiseas or js me callback hell ki problem ko resolve kiya

// deliverOrder();

// placeOrder();
// preParingOrder();

// Talking with Dominos
// Pizaa preparation started..... 
// order palced succesfully
// Pizaa preparton Done