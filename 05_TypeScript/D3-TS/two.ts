// classes in TS

class persion{
    name:string;
    age:number;

    constructor(n1:string,n2:number){
        this.name = n1;
        this.age = n2;
    }

    greet():void{
          console.log(`h1 ${this.name}`); 
    }
}

// Blueprint of an object

const obj0 = new persion("Rhoit",20);
console.log(obj0);


const obj7 = new persion("kuleep",22);
console.log(obj7);
 
console.log(obj0.name);
//console.log(obj7.greet());
obj0.greet();


// Public  Private Protected = TS me hai but
// js ke under sirf public hi hota hai private or protected nhi hota hai 

class customer{
    name:string;
    agee:number;
    balance:number;

    constructor(name:string,agee:number ,balance:number){
            this.name = name;
            this.agee = agee;
            this.balance = balance;
    }
}

const P1 = new customer("deepak",20,394);
console.log(P1);
console.log(P1.name);
console.log(P1.agee);
   console.log(P1.balance);


    class employe extends customer {
           salary:number;

           constructor(salary){
            this.salary = salary;
           }
    }

    const E1 = new employe(430);