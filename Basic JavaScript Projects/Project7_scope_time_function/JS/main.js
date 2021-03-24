//GLobal Variable example
var x=10
function Add_numbers_1 () {
    document.write(15 + x + "<br>")
}

function Add_numbers_2 () {
    document.write(x + 9);
}

Add_numbers_1();
Add_numbers_2();

//Local Variable example
function Add_numbers_3 () {
    var y=12;
    console.log(15 + y)
}

function Add_numbers_4 () {
    console.log(y + 11);
}
Add_numbers_3();
Add_numbers_4();

//If statement example
function get_Date () {
    if (new Date().getHours()<18) {
        document.getElementById("Greeting").innerHTML = "How are you today?";
    }
}

//Personal if statement
function plant () {
    if (400<500) {
        document.getElementById("Plant").innerHTML = "Plants are cool I guess.";
    }
}

//Voting age verification
function Age_Function() {
    Age=document.getElementById("Age").value;
    if (Age>=18) {
        Vote= "You are old enough to vote!";
    }
    else {
        Vote= "You are not old enough to vote";
    }
    document.getElementById("How_old_are_you?").innerHTML=Vote;
}

//What time of day function
function Time_function() {
    var Time = new Date().getHours();
    var Reply;
    if (Time<12 == Time>0) {
        Reply ="It's morning time!";
    }
    else if (Time>= 12 == Time<18) {
        Reply = "It's afternoon time!"
    }
    else {
        Reply = "It's evening time!"
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
}