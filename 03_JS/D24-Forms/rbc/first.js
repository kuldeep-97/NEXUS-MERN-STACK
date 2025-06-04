


const form = document.querySelector('form');

// form.addEventListener('click',(event)=>{
//  form.addEventListener('input',(event)=>{
//     // console.log(event);
//     // console.log(event.target);
//     // console.log(event.target.id);
//     console.log(event.target.value);
// })



// form.addEventListener('change',(event)=>{

//     console.log(event.target.value);
// })



// form.addEventListener('focus',(event)=>{

//     console.log(event.target.value);
// })


// form.addEventListener('submit',(event)=>{

//     event.preventDefault();

//     const first = document.getElementById('first')
//     console.log(first.value)
// })






// const form = document.querySelector('form');

// form.addEventListener('input', (event)=>{
//     console.log(event.target.value);
// })

// form.addEventListener('change', (event)=>{
//         console.log(event.target.value);
// })

// form.addEventListener('focusin', (event)=>{
//     console.log(event.target.value);
// })

// form.addEventListener('focusout', (event)=>{
//     console.log(event.target.value);
// })

// form.addEventListener('dblclick', (event)=>{
//     // console.log(event.target.value);
//     console.log("double click")
// })

// form.addEventListener('reset', (event)=>{
//     // console.log(event.target.value);
//     console.log("form Reset");
// })


form.addEventListener('submit',(event)=>{

    event.preventDefault();             
   
    // const first = document.getElementById("first");
    // console.log(first.value);

    // const second = document.getElementById("second");
    // console.log(second.value);

    // const third = document.getElementById("third");
    // console.log(third.value);   


   // *********** Fome DATa *************     
  // ek object  
           
    const data = new FormData(form);

    // console.log('from data',data)


     // console.log(Array.from(data.keys()));
    // console.log(Array.from(data.values()));


    // for(let key of data.keys())
    //     console.log(key);

    //  for(let value of data.values())
    //     console.log(value);
                               
     for(let key of data.entries())
        console.log(key);

     // Distructure krke

    // for(let [key,value] of data.entries())
    //     console.log(key, value);



    const result = document.getElementById('result');
    result.innerText = `${first.value} ${second.value} is a good Boy`;

    // document.body.append(result);
    
    
})