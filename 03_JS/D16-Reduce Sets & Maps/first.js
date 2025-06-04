// hasOnProperty 

let obj = {
    name:"rohit",
    age:10,
    orange:1,
}

console.log(obj.hasOwnProperty('name'))
console.log(obj.hasOwnProperty('salary'))

let curr = "apple";

console.log(obj.hasOwnProperty(curr))
// obj.apple = 1;
// obj["apple"]=1;
// obj[curr] = 1;
// big problem bhai me array wale consept me ghus gya tha seem on me 

if(obj.hasOwnProperty(curr)){
    obj[curr]++;

}
else
   obj[curr]=1;

console.log(obj);

   