
// Bhai, JavaScript mein har element ko next line mein print karne ka reason ye hai ki tum console.log ka use kar rahe ho, aur console.log har call ke baad automatically new line add kar deta hai. Agar tumhe elements ko same line mein print karna hai, toh tumhe kuch alag tarike use karne honge.


// 1. console.log ka Use Karke Same Line Mein Print Karna
// console.log har baar new line add karta hai, lekin tum template literals ya string concatenation ka use karke ek hi line mein print kar sakte ho.



// Why Does JavaScript Print New Lines by Default?
// console.log ka design hi aisa hai ki har call ke baad new line add ho. Ye debugging aur logging ke liye convenient hai, kyun ki har log alag line mein show hota hai.

// Agar tumhe same line mein print karna hai, toh tumhe explicitly string ko format karna hoga (jaise join(), process.stdout.write, ya document.write ka use karke).



// Example: Template Literals ka Use

const fruits = ['Apple', 'Banana', 'Mango'];
let output = '';

for (let fruit of fruits) {
    output += fruit + ' '; // Add each fruit to the output string
}

console.log(output); // Print all fruits in the same line


// Example: String Concatenation ka Use

const fruitss = ['Apple', 'Banana', 'Mango'];
let outputt = '';

for (let fruit of fruitss) {
    outputt = outputt + fruit + ' '; // Concatenate each fruit
}

console.log(outputt); // Print all fruits in the same line




// 2. process.stdout.write ka Use Karke Same Line Mein Print Karna (Node.js)

// Agar tum Node.js environment mein kaam kar rahe ho, toh process.stdout.write ka use karke same line mein print kar sakte ho. Ye method new line add nahi karta.

// Example: process.stdout.write ka Use

const fruits1 = ['Apple', 'Banana', 'Mango'];

for (let fruit of fruits1) {
    process.stdout.write(fruit + ' '); // Print each fruit in the same line
}




// 3. Array.join() Method ka Use Karke Same Line Mein Print Karna
// Agar tumhe array ke elements ko ek string mein join karna hai aur same line mein print karna hai, toh Array.join() method ka use karo.

// Example: Array.join() ka Use

const fruits2 = ['Apple', 'Banana', 'Mango'];
const output2 = fruits2.join(' '); // Join elements with a space

console.log(output2); // Print all fruits in the same line




// 4. Browser Environment Mein Same Line Mein Print Karna
// Agar tum browser environment mein kaam kar rahe ho, toh document.write ya innerHTML ka use karke same line mein print kar sakte ho.

// Example: document.write ka Use

const fruits3 = ['Apple', 'Banana', 'Mango'];

for (let fruit of fruits3) {
    document.write(fruit + ' '); // Print each fruit in the same line
}


// Example: innerHTML ka Use

const fruits4 = ['Apple', 'Banana', 'Mango'];
let output4 = '';

for (let fruit of fruits4) {
    output += fruit + ' '; // Add each fruit to the output string
}

document.body.innerHTML = output; // Print all fruits in the same line