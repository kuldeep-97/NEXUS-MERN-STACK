interface person{
    name:string,
    age:number,
    gender:string,
    aadhar?:number  // optional hai 
}

const abj:person = {
    name:"lull",
    age:38,
    gender:"male",

}

// Utility Types for objects
// Latest example
interface customer {
    name: string,
    age: Number,
    balance:number ,
}

// Use of Partial
// All Property Becomes Optional
const obj1:Partial<customer> = {// all propertys optional ban gayegi
    name:"kuldeep",
    balance:399,
}

// Use of Required
// All Property Should be Filled
const obj2: Required<customer> = {// all propertys Requried ban gayegi
    name:"kuldeep",
    balance:399,
    age:39,
}

// Use of Red Only
// The property can only be read , Write option is not avlable
const obj3:Readonly<customer> = {// all propertys ko sirf Red kr skte hai change nhi 
    name:"kuldeep",
    balance:399,
    age:88,
}
//obj3.name = "Rohit";



// Array of Objects

interface people {name:string,age:number}

const arr: people[] = [{name:"kuldp",age:21,},{name:"monhit", age:18}]



// function in TS
                      //Optional hai but aachii habbit hoti hai khid se mation krna
function greet(a:number):number{
    console.log(a);
    return a+5;
}

console.log(greet(10));

function meet(msg:string, val:number){
    console.log(msg,val);
}

meet('anshika vermaj', 5);

//array of object ke sub object seam interface follow krte hai kya
interface people1 {name:string,age:number}
interface manager {salary:number,id:String}

// const arr1 = [{name:"kuld",age:30,},{name:"mohit",age:19,},{salary:399,id:"39992"}]

const arr1: (people1 | manager)[] = [{name:"kuld",age:30,},{name:"mohit",age:19,},{salary:399,id:"39992"}]



// Defoult parameter
function neet(msg:string = "jit"){
       
    console.log(msg);
}
neet();
neet("kuolee");

//  optional perameter

function GATE(persion?:string){
    console.log(persion || "kumawat");
}
GATE("Rohit");
GATE();

// Arrow funtion

const sum = (a:number,b:number):number=>{
    return a+b;
}
console.log(sum(3,5));

// Callback function

(amount)=>{
    console.log(amount);
}

type chill = (amount:number)=>void;

function palceOrder(order:number,Callback:(amount:number)=>void ):void{
      const amount:Number  = order+10;
      Callback(amount)
}  

palceOrder(10, (amount)=>{
    console.log(amount);
} )


//Rest Parameter   

function total(...arr:number[]){
     let ans = 0;
     arr.forEach((val)=> ans = ans + val);
     console.log(ans);
}

total(1,2,4,5,6,7,88);


// Extend Keyword

interface human{
    name:string,
    age:number,
}

interface Teacher extends human{
     salary:string,
     id:number,
}

interface BankEmploye extends human{
    salary: string,
    position:string,
}

const objj:Teacher={
    name : "Rohit",
    age:20,
    salary:"chillar",
    id:233,
}