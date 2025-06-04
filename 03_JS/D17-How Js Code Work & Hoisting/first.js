
// Hoisting : ek consept hia जहां वेरिएबल और फंक्शन डिक्लेरेशन को उनके स्कोप के टॉप पर ले जाया जाता है, भले ही उन्हें कोड में बाद में डिक्लेयर किया गया हो।


// Hoisting in JavaScript ek default behavior hai jisme variable aur function declarations ko code ke top pe "move" kar diya jata hai during compilation phase.

//Hoisting means: JS engine moves variable and function declarations to the top of their scope (before execution).

// hoisting in js is the behavior where varialbe and fn declarations are moved to the top of their constaing scope during the compilation phase. before the code has been executed.


// Hoisting : declarration part ko top pe lejata hai 

let z = undefined;  // declar
var x = undefined;
//let y;     // memory allocatioin 
// const a;



console.log(x);
z = 50;        // instruction 
// console.log(y);
x = 10;
//y = 20;
// a = 20;
// console.log(z);
console.log(x);