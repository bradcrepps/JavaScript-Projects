function Ride_Function() {
    var Height, Can_ride;
    Height = document.getElementById("Height").value;
    Can_ride = (Height < 52) ? "You are too short":"You are tall enough";
    document.getElementById("Ride").innerHTML = Can_ride + " to ride.";
}

function Vehicle(Make, Model, Year, Color) {
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}
var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle("Subaru", "Forrester", 2021, "Navy")
var Erich = new Vehicle("Ford", "GT", 2006, "White with Blue stripe")
function myFunction() {
    document.getElementById("Keywords_and_Constructors").innerHTML= "Erich drives a " + Erich.Vehicle_Color + "-colored " + Erich.Vehicle_Model + " manufactured in " +Erich.Vehicle_Year;
}

function Dog (Breed, age, color, tricks, size) {
    this.Dog_Breed=Breed;
    this.Dog_age=age;
    this.Dog_color=color;
    this.Dog_tricks=tricks;
    this.Dog_size=size;
}
var Pascal= new Dog("French Bulldog", 13, "Black and White", "Beg for treats", "Large");
var Riley= new Dog("Springer", 9, "Brown and White", "Whine a lot", "Medium");
function newFunction() {
    document.getElementById("New_and_This").innerHTML= "Riley is a "+Riley.Dog_Breed;
}

function count_Function() {
    document.getElementById("Nested_Function").innerHTML = Count();
    function Count() {
        var Starting_point= 9;
        function Plus_one() {Starting_point += 1;}
        Plus_one();
        return Starting_point;
    }
}