
// // first foll acssec lena hai
// const red = document.getElementById('red');
// const blue = document.getElementById('blue');
// const orange = document.getElementById('orange');
// const green = document.getElementById('green');
// const purple = document.getElementById('purple');

// const body = document.body;


// // document.querySelector('body');

// // lestion to eventlistener lgavo

// red.addEventListener('click' ,()=>{
    
//     body.style.backgroundColor = 'red';
// })

// blue.addEventListener('click' ,()=>{
    
//     body.style.backgroundColor = 'blue';
// })

// orange.addEventListener('click' ,()=>{
    
//     body.style.backgroundColor = 'orange';
// })

// green.addEventListener('click' ,()=>{
    
//     body.style.backgroundColor = 'green';
// })

// purple.addEventListener('click' ,()=>{
    
//     body.style.backgroundColor = 'purple';
// })





// const buttons = document.querySelectorAll('button')
// // console.log(buttons);
// // const body = document.querySelector('body');
//  OR
// const body = document.body;
      
 
// buttons.forEach((button)=>{

//     button.addEventListener('click',()=>{
         
//         // console.log(button.id);
//         body.style.backgroundColor = button.id;
//     })
//     // console.log(button);
// })



//****** OPtimazation ******* 
// retivly eventlishner ka krna se js slow ho jati hai to 
// vha pe Event Bubbling ka  or 
// Event capturing ka  consept aata hai*/  

 

// event daligation
const root = document.getElementById('root');

root.addEventListener('click',(event)=>{
    // console.log(event.target);
    if(event.target.tagName == 'BUTTON')
    document.body.style.backgroundColor = event.target.id;
}) //event daligation optimaize code hai ye
  

//benifit kya hai
// event daligation