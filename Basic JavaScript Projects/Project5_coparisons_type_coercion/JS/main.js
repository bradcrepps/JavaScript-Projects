document.write("10" + 5);

//Positive infinity with variable
function positive_infinity() {
    var pos_inf;
    document.write(2E310);
    document.getElementById("plus").innerHTML = pos_inf;
}
//Negative infinity without variable
function negative_infinity() {
    document.getElementById("minus").innerHTML = document.write(-3E310);
}

//true boolean
document.write(10 < 2);

//false boolean
document.write(10<2);

//console log equation
console.log(4+4);

//false in the console log
console.log(12<4);

//check for equality true
document.write(10+5 == 15)

//check for equality false
document.write(10+4 == 15)


X=10;
Y=10;
document.write(X===Y);


A=13;
B=15;
document.write(A===B);


c="cheese"
d=5
document.write(c === d);

e="ten"
f=10
document.write (e === f);

document.write(2>1 && 6>4);

document.write(3>1 && 6<4);

document.write(40>6 || 13<3);

document.write(20<2 || 2>27)

function not_Function() {
    document.getElementById("Not").innerHTML = !(20>10);
}

function yes_Function() {
    document.getElementById("yes").innerHTML = !(66 > 189);
}
