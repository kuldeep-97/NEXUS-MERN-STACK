
// for in loop in js working

// Bhai, for...of loop JavaScript mein iterable objects (jaise arrays, strings, maps, sets, etc.) ke values ko iterate karne ke liye use hota hai. Ye loop directly values par iterate karta hai, keys ya indices par nahi.



// Important Points about for...of Loop:
// Iterable Objects:
// for...of loop sirf iterable objects ke saath kaam karta hai. Iterable objects mein arrays, strings, maps, sets, etc. aate hain.

// Direct Values:
// Ye loop directly values par iterate karta hai, keys ya indices par nahi.

// Objects ke Saath Kaam Nahin Karta:
// Regular objects iterable nahi hote, isliye for...of loop unke saath kaam nahi karega. Objects ke liye for...in loop use karo.

// Order Guaranteed:
// for...of loop elements ko guaranteed order mein iterate karta hai.



// Syntax of for...of Loop:

// for (let value of iterable) {
//     // Code to execute for each value
// }

// value: Har iteration mein, value iterable ke ek element ko hold karta hai.

// iterable: Wo object jiske values par iterate karna hai (jaise array, string, etc.).



// How for...of Loop Works:
// Loop iterable object ke har value par iterate karta hai.

// Har iteration mein, value variable mein current element store hota hai.

// Loop ke andar, tum value ka use karke element ko access kar sakte ho.



// Example 1: Arrays ke Saath for...of Loop

const fruits = ['Apple', 'Banana', 'Mango'];

for (let fruit of fruits) {
    console.log(fruit);
}

// Explanation:

// for...of loop fruits array ke har element (Apple, Banana, Mango) par iterate karta hai.

// Har iteration mein, fruit variable mein current element store hota hai.



// Example 2: Strings ke Saath for...of Loop

const message = 'Hello';

for (let char of message) {
    console.log(char);
}

// Explanation:

// for...of loop message string ke har character (H, e, l, l, o) par iterate karta hai.

// Har iteration mein, char variable mein current character store hota hai.



// Example 3: Maps ke Saath for...of Loop

const map = new Map();
map.set('name', 'John');
map.set('age', 30);

for (let entry of map) {
    console.log(entry);
}

// Explanation:

// for...of loop map ke har entry (key-value pair) par iterate karta hai.

// Har iteration mein, entry variable mein current key-value pair store hota hai.



// Example 4: Sets ke Saath for...of Loop

const set = new Set([1, 2, 3, 4, 5]);

for (let value of set) {
    console.log(value);
}

// Explanation:

// for...of loop set ke har value (1, 2, 3, 4, 5) par iterate karta hai.

// Har iteration mein, value variable mein current value store hota hai.



// Example: for...of Loop with entries() Method
// Agar tumhe keys aur values dono chahiye, toh entries() method use karo:

const fruitss = ['Apple', 'Banana', 'Mango'];

for (let [index, fruit] of fruitss.entries()) {
    console.log(index + ': ' + fruit);
}

// Explanation:

// entries() method array ke har element ke liye [index, value] return karta hai.

// Destructuring ka use karke index aur fruit variables mein values store ki gayi hain.



// Example: for...of Loop with break Statement
// Loop ko kisi condition par break karne ke liye break statement use karo:

const numbers = [1, 2, 3, 4, 5];

for (let num of numbers) {
    if (num > 3) {
        break;
    }
    console.log(num);
}



// When to Use for...of Loop:
// Arrays, strings, maps, sets, etc. ke values par iterate karne ke liye.
// Jab tumhe keys ya indices ki jagah directly values chahiye ho.

// When Not to Use for...of Loop:
// Regular objects ke liye (use for...in loop).
// Jab tumhe keys ya indices ke saath kaam karna ho.