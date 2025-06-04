// const original_answer = ["Sachin Tendulkar","West Indies","Sachin Tendulkar","264","Muttiah Muralitharan"]

// Backend logic : 

const original_answer = {
   q1: "Sachin Tendulkar",
   q2: "West Indies",
   q3: "Sachin Tendulkar",
   q4: "264",
   q5: "Muttiah Muralitharan"
}
 
const form = document.querySelector('form');

form.addEventListener('submit',(event)=>{
    
   event.preventDefault();
   const data = new FormData(form);

   // console.log("data :",data)
   // console.log(data.entries())

   // const answer = Array.from(data.values());
   // console.log("ans:",answer)

   // console.log(data.entries())
   
//    let result = 0;
//    for(let i=0;i<answer.length;i++)
//    { if(answer[i]===original_answer[i])
//         result++;
//    }

   let result = 0

   for(let [key,value] of data.entries())
    
   {
    if(value===original_answer[key])
        result++;
        
   }

   const out = document.getElementById('out');
   out.innerText = `  5 Out of : ${result} Ans is Correct`;

   // document.getElementById('container').append(out);

//    form.reset();
 
})


