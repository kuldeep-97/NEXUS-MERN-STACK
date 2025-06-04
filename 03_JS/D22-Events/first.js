const button = document.querySelector('button');

button.addEventListener('click', ()=>{


    // Read the data
    // acces loo
    const input1 = document.getElementById('first');
    const number1 = Number(input1.value);// string fome me ataa hai data to convet krte hai no me

    const input2 = document.getElementById('second');
    const number2 = Number(input2.value);

    if(isNaN(number1)||isNaN(number2))
        return;

    // Output the result

    const result = number1+number2;
    const re = document.getElementById('result');
    re.textContent = "Result: "+result;
})
   

// BMI Calculator
// Dhaej Calculator(Male)
// Alimony Calculator(Female)