//Coffee Dictionary
function coffee_drinks() {
    var espresso = {
        roast:"Dark",
        flavor:"Rich",
        milk:"None"
    };
    delete espresso.flavor;
    document.getElementById("Coffee_Dictionary").innerHTML= espresso.flavor;
}