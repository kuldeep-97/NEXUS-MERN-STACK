
cart = ["pizz", 'coke','senwetch'];


 function placeOrder(cart , callback){
    console.log("Talking with Domino's");
    
    setTimeout(()=>{
     console.log("Order Placed Succesfully");
     const order = {orderId: 221, food: cart, restorent:'Domisnos' , location: 'Dwarka' }
     callback(order);
    },2000)
}

function preparingOrder( order, callback){
    console.log("Pizza preparation started....");

    setTimeout(()=>{
        console.log("Pizza preparation Done");
        const foodDetaiol = {token: 12, restourant: order.restorent, location: order.location }
        callback(foodDetaiol);
       },5000)
};

function pickupOrder(foodDetaiol,callback){
    console.log("Reaching restaurant for picking order")

    setTimeout(()=>{
        console.log("Order picked up by Delivery Boy");
        const droplocation = foodDetaiol.location;
        callback(droplocation)

    },500)
}

function deliverOrder(){
    console.log("Delivery boy on the way");

    setTimeout(()=>{
        console.log("Order Delivered succesfully");
    },5000)
}

// function ratingOrder(){
// }

placeOrder(cart, callback);
 preparingOrder( order, callback);
  pickupOrder(foodDetaiol,callback);
   deliverOrder();


// placeOrder(preparingOrder);
placeOrder(cart,(order)=>{
    preparingOrder(order,(foodDetaiol)=>{
        pickupOrder(foodDetaiol,(droplocation)=>{
            deliverOrder(droplocation);
        });
    })
});


// const callback = (order)=>{
//     preparingOrder(order,()=>{
//         pickupOrder(()=>{
//             deliverOrder();
//         });
//     })
// }









//*********** khud se promiss creat krna **** */\

placeOrder(cart);
preparingOrder(order)
pickupOrder(foodDetaiol);
deliverOrder(droplocation)

const prom = placeOrder(cart);

prom.then((order)=>{
    preparingOrder(order);
})


// chainig se likh skte hia

 placeOrder(cart)
 .then((order)=>{
    preparingOrder(order);
})


// ya fir el line me 

 placeOrder(cart)
 .then(order=> preparingOrder(order))
 .then(foodDetaiol => pickupOrder(foodDetaiol))
 .then(droplocation => deliverOrder(droplocation))


 // more info or update : promisCreat.js file me ok