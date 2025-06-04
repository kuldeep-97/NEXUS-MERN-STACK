
cart = ["pizz", 'coke','senwetch'];

function placeOrder(cart ){
    console.log("Talking with Domino's");
    
    // promise creat 
  const pr =  new Promise(function(resolve,reject){

     setTimeout(()=>{

        const food_available = true;
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
 

// ye fromet is very easy 
async function greet() {

 try{

   const order = await placeOrder(cart);
   const foodDetaiol = await preparingOrder(order);
   const droplocation = await pickupOrder(foodDetaiol);
   deliverOrder(droplocation);
 }
 catch(error){
    console.log(error)
 }
}

greet();

// Note : await ko nomaly use nhi kr skte isko ek fn ke under use krna pdega ok

// // Deficult
//  placeOrder(cart)
// .then(order=> preparingOrder(order)) // pr ko ye concume krega 
//  .then(foodDetaiol => pickupOrder(foodDetaiol))
//  .then(droplocation => deliverOrder(droplocation))
//  .catch(error=>console.log(error))

