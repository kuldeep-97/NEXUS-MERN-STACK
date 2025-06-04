

let user = {
    name : 'kuldeep',
    age : 30
}

// Object.getOwnPropertyDescriptor(obj, 'key')
// console.log(Object.getOwnPropertyDescriptor(user, 'name'))

// Property change krni ho to : Object.definePropertie(obj, 'key')

Object.defineProperty(user,'name', {
    writable: false,
    // enumerable: false,
    // configurable: false
});

// not name change 
user.name = 'mohit';

// writable : kha use hota hai : like big code base jese ki amazone me multiple log code likhete honge : to vaha pe koi data me Acidental changes na ho paye is liye writable ko false krte hai ok

console.log(Object.getOwnPropertyDescriptor(user, 'name'))