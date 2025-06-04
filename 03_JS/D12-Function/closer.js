function fun(){

    var a = 6;    // lexical invirment
    function f(b){
        var sum = a+b;
        return sum;
    }
    return f;
}

var numsum = fum()
console.log(numsum(2));