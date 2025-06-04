
// C: Accessing By Css Selector:
// i Single Element
const id = document.querySelector('#first');
id.innerHTML = "Hello money";

const id2 = document.querySelector('.header2');
// console.log(id2); 
id2.style.backgroundColor = 'gray';
 

// How to iterate over Node list

// ecjectly arr nhi but arr ke jese opration apply kr skte hai sarre opration apply bhi nhi kr skte ro apply krna hai to ek arr me convet krna hoga 

//  Convert NodeList into array
//  Array.from(obj)

// const obj = document.querySelectorAll('.header1')

/*1: obj.forEach((val)=>{
     console.log(val)
    }) 
 */


// 2: for(let val of obj){
// console.log(val) ;  
// }  


// 3: for(i=0; i<Obj.length; i++)
//     obj[i].style.color = 'gray';


// object ko array me convert kese kre
// Convert Nodelist into array

// Array.from(obj);


// other css selector use



// *********************************************

// D: Accessing by TAg Name

// const obj = document.getElementsByTagName('h1');
// console.log(obj);

// let team = document.getElementsByTagName('li');

// How to iterate over it

// 1:for(let i=0;i<team.length;i++)
// team[i].style.color = "black";

// 2: for(let val of team)
    // console.log(val)

// 3: Array.from(team).forEach((val)=>{
// console.log(val);
//  })






// ****************************

// e: Accessing Using Relationships
//  i: Parent Node:

// const list = document.querySelector('li');
// console.loge(list);
// console.log(list.parentElement);
// console.log(list.parentNode); diffrance


// const par = document.querySelector('ul');
// console.log(par);
// console.log(par.childNodes);
// console.log(par.children);
// console.log(par.firstChild);
// console.log(par.firstElementChild);



// innerHTML : Tag ke under jo kuch bhi hota sabhi ko print krega ok agetig 

// textContent : jo text ko display non ya hide kr ke rkha hai vo text bhi show hoga ok

// innerText : jo dispaly pe show hoga wahi dekhyega  
   // diff 
