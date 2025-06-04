// Bhai, for...in loop JavaScript mein objects ke properties ko iterate karne ke liye use hota hai. Ye loop object ke enumerable properties (keys) par iterate karta hai.


// When to Use for...in Loop:

// Jab tumhe object ke properties par iterate karna ho.
// Jab tumhe nested objects ke properties par iterate karna ho.

// When Not to Use for...in Loop:
// Arrays ke liye (better alternatives available hain).

// Jab tumhe non-enumerable properties ya prototype properties ko ignore karna ho.

// Syntax of for...in Loop:

// for (let key in object) {
//     // Code to execute for each property
// }
// key: Har iteration mein, key object ke ek property ka naam    hold karta hai.

// object: Wo object jiske properties par iterate karna hai.


// How for...in Loop Works:
// Loop object ke har enumerable property par iterate karta hai.

// Har iteration mein, key variable mein current property ka naam store hota hai.

// Loop ke andar, tum object[key] ka use karke property ki value access kar sakte ho.




// Example 1: Simple Object ke Properties Iterate Karna
const person = {
    name: 'John',
    age: 30,
    city: 'New York'
};

for (let key in person) {
    console.log(key + ': ' + person[key]);
     // console.log(key , ': ', person[key]);
}

// Explanation:

// for...in loop person object ke har property (name, age, city) par iterate karta hai.

// Har iteration mein, key variable mein property ka naam store hota hai.

// person[key] se property ki value access ki jati hai.




// ***********Example 2: Nested Objects ke Properties Iterate Karna*************
const car = {
    brand: 'Toyota',
    model: 'Corolla',
    details: {
        color: 'red',
        year: 2020
    }
};

for (let key in car) {
    if (typeof car[key] === 'object') {
        console.log(key + ':');
        for (let nestedKey in car[key]) {
            console.log('  ' + nestedKey + ': ' + car[key][nestedKey]);
        }
    } else {
        console.log(key + ': ' + car[key]);
    }
}

// Explanation:

// for...in loop car object ke har property par iterate karta hai.

// Agar property ki value ek object hai (details), toh nested for...in loop use kiya gaya hai.




// Example 3: Arrays ke Saath for...in Loop
const fruits = ['Apple', 'Banana', 'Mango'];

for (let index in fruits) {
    console.log(index + ': ' + fruits[index]);
}

// Explanation:

// Arrays bhi technically objects hote hain, jahan keys indices (0, 1, 2, ...) hote hain.

// for...in loop array ke indices par iterate karta hai.





// Important Points about for...in Loop:

// Enumerable Properties:
// for...in loop sirf enumerable properties par iterate karta hai. Non-enumerable properties (jaise length in arrays) show nahi hoti.

// Prototype Chain:
// Agar object ke prototype mein koi enumerable properties hain, toh for...in loop unhe bhi iterate karega. Isse avoid karne ke liye hasOwnProperty method use karo:

for (let key in object) {
    if (object.hasOwnProperty(key)) {
        console.log(key + ': ' + object[key]);
    }
}

// Order of Iteration:
// JavaScript engines ke hisaab se properties ka order alag ho sakta hai. Guaranteed order ke liye for...of ya forEach use karo.

// Arrays ke Liye Better Alternatives:
// Arrays ke liye for...in loop use karne ki jagah for...of ya forEach use karna better hai:

for (let fruit of fruits) {
    console.log(fruit);
}