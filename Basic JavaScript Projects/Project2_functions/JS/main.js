//First function that utilizes getElementByID//
//Colors text green//
function My_First_Function() {
    var str = "This text is green";
    var result = str.fontcolor("green");
    document.getElementById("Green_Text").innerHTML = result;
}

//Second function that utilizes concatenation//
function My_Second_Function() {
    var sentence = "I am learning ";
    sentence += "a lot from this bootcamp!";
    document.getElementById("Concatenate").innerHTML = sentence;
}