
// Interview spacial

const grandParent = document.getElementById('grandParent');
const parent = document.getElementById('parent');
const child = document.getElementById('child');

// event bubbling and event capturing 

// By defoul work in Bubbling ok

// child.addEventListener('click',()=>{
//     console.log('child clicked');
// },false)  // true

// parent.addEventListener('click',()=>{
//     console.log('parent clicked');
// },false)


// grandParent.addEventListener('click',()=>{
//     console.log('grandparent clicked');
// },false)




// *****Capture***

// child.addEventListener('click',(event)=>{
//     // console.log('child clicked');
//     // console.log(event.target);
//     // console.log(event.currentTarget); 
//     event.stopProagation();
// },true)

// parent.addEventListener('click',(event)=>{
//     console.log('parent clicked');
//     console.log(event.target);
// },true)


// grandParent.addEventListener('click',(event)=>{
//     console.log('grandparent clicked');
//     console.log(event.target);
// },true)


//benifit kya hai
// event daligation