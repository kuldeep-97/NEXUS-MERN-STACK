// creat a object and verify the object 
// to pass by value or pass by refernce or not which are ture 


let obj = {
    name: "kuldeep",
    age: 20,
    address: "khalgha",

}

let obj2 = obj;
obj2.age = 30;
console.log(obj.age);
console.log(obj2.age)

// that ans is pass by refrence 
