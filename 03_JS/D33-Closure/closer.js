
// 🔐 Closure kya hota hai?
// Closure tab banta hai jab:

// Ek function dusre function ke andar defined ho

// Aur inner function outer function ke variables ko access karta ho — even after outer function execute ho chuka ho

// Closure: function + uska lexical environment



// 🌐 Lexical Environment kya hota hai?
// Jab bhi koi function run hota hai, JavaScript uske liye ek Lexical Environment (LE) banata hai.

// Lexical Environment:

// Ek memory space hoti hai jahan function ke local variables aur outer (parent) function ke variables store hote hain.

// Yeh environment function ke scope ke base par banta hai (isliye isse lexical environment kehte hain — "lexical" ka matlab hota hai "jahan likha gaya hai").




function outer() {
    let a = 10;

    function inner() {
        console.log(a); // inner function 'a' ko access kar raha hai
    }

    return inner;
}

const fn = outer(); // outer() ka return inner hai
fn(); // Output: 10



// ✅ Breakdown:
// outer() call hone par:

// a = 10 memory mein store hota hai.

// inner() function create hota hai, lekin execution tab hoti hai jab fn() call hota hai.

// Jab fn() (yaani inner()) run hota hai, tab bhi wo a ko access kar paata hai.

// Yehi hota hai closure: function + uska lexical environment (jisme a store tha)



// 🔁 Summary:
// Term	Meaning
// Closure	Function + surrounding variables ka access (even after parent function finished)
// Lexical Env.	Memory area jisme variables aur function references hote hain, based on code structure