  // <li>TS<li>

//   // *********1: Create a Element*********

//   const element = document.createElement('li')
//   element.innerHTML="TS";

// list ko attech kese krate hai 
//   const parent = document.getElementById("root");
//   // element add krna
//   parent.appendChild(element);



//   // ** Creat Attech function

//   function attech(content){

//     const element = document.createElement('li')
//     element.innerHTML=content;
  
//     const element2 = document.createElement("li");
//     element2.innerHTML = content+'V2.0';

//     const parent = document.getElementById    ("root");
//     // element add krna
//     // parent.appendChild(element);
//     parent.append(element,element2)
//     // add ki multiple statement likh skte hai

//   };

//     attech("Git & Github");
//     attech("React");




// ********2: Create a Text Node*********** 
//   jiske ke sath koi tag attech nhi hota hai

// const element = document.createTextNode("Hello Coder Army");

// const parent = document.getElementById('root');
// parent.append(element);




//***********3: Create a Attribute Node*********/

// const element = document.createAttribute('id'); //key 
//  element.value = "first"; // value

// // Acces to first list
// // const curr_list = document.querySelector('li')
// // curr_list.setAttributeNode(element)

// // Acces to second list
// const parent = document.getElementById("root");
// // console.log(parent.children[1]);
// parent.children[1].setAttributeNode(element)




// *****Access attributr of a element*****

// const element = document.getElementById('root');
// // console.log(element.getAttribute('id'))

// // add new attribute
// element.setAttribute('custom','39');
// element.setAttribute('class','Rohan')

// // remove attribute
// element.removeAttribute('custom')





// ***************Add Nodes to the DOM*****************

// array
// const parent = document.getElementById('root');
// // element creat 
// // data
// const element = document.createElement('li');
// element.innerHTML = "TS";

// parent.prepend(element); // first me add hoga
// parent.append(element); // last me add hoga
  
// // Insert before
// const child2 = parent.children[1];
// // console.log(child2);
// parent.insertBefore(element,child2);

// // repless cilde
// parent.replaceChild(element,child2);  

// using innnerhtml

// const parent = document.getElementById('root');
// parent.innerHTML = 'Ts';
//  const parent = document.getElementById('root');
//  parent.innerHTML += "Ts";
const parentt = document.getElementById('root');
  parent.innerHTML += "<li>Ts</li>";



// ********7: InsertAdjacentElement****************

const element = document.createElement('div');
element.innerHTML = "Heelo coder armys";
// for propery hai eski
parent.insertAdjacentElement("beforebegin",element)


//**** Deleting node or element */

// document.querySelector('li').remove();
// document.querySelector('li');
// element.remove();