// function within in function

function fun(){
    function inerfun(a,b){
       let sum = a+b;
       return sum;
    }
    return inerfun;
}

var numsum = fun();
console.log(numsum(2,4));



function fun(){
    return function inerfun(a,b){
       let sum = a+b;
       return sum;
    }

}

var numsum = fun();
console.log(numsum(2,4));


function fun(){
    return function(a,b){
       let sum = a+b;
       return sum;
    }

}

var numsum = fun();
console.log(numsum(2,4));


function creatHelloWorld(){
      function f(){
        return "HelloWold";
      }
      return f;
}