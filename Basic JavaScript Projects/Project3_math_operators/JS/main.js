//Addition function//
function addition_function() {
    var addition = 1+1;
    document.getElementById("Math_addition").innerHTML= addition;
}

//Subtraction function//
function subtraction_function() {
    var Subtraction = 6-3;
    document.getElementById("Math_subtraction").innerHTML= Subtraction;
}

//Multiplication function//
function multiplication_function() {
    var Multiplication = 5*4;
    document.getElementById("Math_multiplication").innerHTML= Multiplication;
}

//Divison function//
function division_function() {
    var Divison = 1000/5;
    document.getElementById("Math_divison").innerHTML= Divison;
}

//Multiple mathmatic expressions at once//
function more_Math() {
    var simple_Math = (1+2)*10/2-5;
    document.getElementById("Math_simple").innerHTML= simple_Math;

}

function modulus_Operator() {
    var remainder_Math = 25 % 6;
    document.getElementById("Remain_math").innerHTML = remainder_Math;
}