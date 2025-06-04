
const pr = new Promise(function(resolve,reject){

})

return pr;





cart = ["pizz", 'coke','senwetch'];

function placeOrder(cart ){
    console.log("Talking with Domino's");
    
    // promise creat 
  const pr =  new Promise(function(resolve,reject){

     setTimeout(()=>{

        const food_available = false;
        if(food_available){
     console.log("Order Placed Succesfully");
     const order = {orderId: 221, food: cart, restorent:'Domisnos' , location: 'Dwarka' }
     resolve(order);
        }
        else{
            reject("Itmes out of stocks")
        }
    },2000)
    
 })

  return pr;
  
}

  


 
function preparingOrder( order){
    console.log("Pizza preparation started....");

  const pr = new Promise(function(resolve,reject){
       
        setTimeout(()=>{
        console.log("Pizza preparation Done");
        const foodDetaiol = {token: 12, restourant: 
        order.restorent, location: order.location }
        resolve(foodDetaiol);
       },5000)
  })  

  return pr;  
};




function pickupOrder(foodDetaiol,){
    console.log("Reaching restaurant for picking order")

    const pr = new Promise(function(resolve,reject){
        
            setTimeout(()=>{
        console.log("Order picked up by Delivery Boy");
        const droplocation = foodDetaiol.location;
        resolve(droplocation)

    },500)
    })

    return pr;
}



function deliverOrder(){
    console.log("Delivery boy on the way");

    setTimeout(()=>{
        console.log("Order Delivered succesfully");
    },5000)
}

// function ratingOrder(){
// }

// placeOrder(cart, callback);
//  preparingOrder( order, callback);
//   pickupOrder(foodDetaiol,callback);
//    deliverOrder();


// // placeOrder(preparingOrder);
// placeOrder(cart,(order)=>{
//     preparingOrder(order,(foodDetaiol)=>{
//         pickupOrder(foodDetaiol,(droplocation)=>{
//             deliverOrder(droplocation);
//         });
//     })
// });


// // const callback = (order)=>{
// //     preparingOrder(order,()=>{
// //         pickupOrder(()=>{
// //             deliverOrder();
// //         });
// //     })
// // }





// //*********** khud se promiss creat krna **** */\

// placeOrder(cart);
// preparingOrder(order)
// pickupOrder(foodDetaiol);
// deliverOrder(droplocation)

// const prom = placeOrder(cart);

// prom.then((order)=>{
//     preparingOrder(order);
// })


// // chainig se likh skte hia

//  placeOrder(cart)
//  .then((order)=>{
//     preparingOrder(order);
// })


// ya fir el line me 

 placeOrder(cart)
 .then(order=> preparingOrder(order)) // pr ko ye concume krega 
 .then(foodDetaiol => pickupOrder(foodDetaiol))
 .then(droplocation => deliverOrder(droplocation))
 .catch(error=>console.log(error))
 