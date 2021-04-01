//Count to 10 loop
function count_To_Ten() {
    var Digit="";
    var X=1;
    while (X<11) {
        Digit += "<br>" + X;
        X++;
    }
    document.getElementById("Counting_to_Ten").innerHTML = Digit;
}

//Example of For loop
var Instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"];
var Content="";
var Y;
function for_Loop() {
    for (Y=0; Y< Instruments.length; Y++) {
        Content += Instruments[Y] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML = Content;
}

//Example of an array using cat pics
function cat_pics() {
    var Cat_Picture = [];
    Cat_Picture[0] = "sleeping";
    Cat_Picture[2] = "playing";
    Cat_Picture[2] = "eating";
    Cat_Picture[3] = "purring";
    document.getElementById("Cat").innerHTML = "In this picture, the cat is " + Cat_Picture[2] + ".";
}

//Constant example
function constant_function() {
    const Musical_Instrument = {type:"guitar", brand:"Fender", color:"black"};
    Musical_Instrument.color = "blue";
    Musical_Instrument.price="$900";
    document.getElementById("Constant").innerHTML = "The color of the " + Musical_Instrument.type + " was " +Musical_Instrument.color;
}

//Let example
var z = 55
document.write(z);
{
    let z = 94
    document.write("<br>" + z)
}
document.write("<br>" + z);

//Object with method usage example
let car = {
    make: "Tesla ",
    model: "Model Y ",
    year: "2021 ",
    color: "slate ",
    description : function() {
        return "The car is a " + this.year + this.color+ this.make+ this.model;
    }
};
document.getElementById("Car_Object").innerHTML = car.description();