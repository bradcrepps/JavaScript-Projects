//concatenate a whole sentence
function full_Sentence() {
    var part_1 = "I have ";
    var part_2 = "made this ";
    var part_3 = "into a ";
    var part_4 = "complete sentence.";
    var whole_sentence = part_1.concat(part_2, part_3, part_4);
    document.getElementById("Concatenate").innerHTML = whole_sentence;
}

//Slice method example
function slice_Method() {
    var Sentence = "Bread makes you fat?!";
    var Section = Sentence.slice(16, 21);
    document.getElementById("Slice").innerHTML= Section;
}

//toUpperCase method example
function upper_decker() {
    var p1 = "Yo, what up"
    var bigwords = p1.toUpperCase();
    document.getElementById("Payload").innerHTML = bigwords;
}

//search method example
function searching() {
    var searchword = "Where in the word is Carmen Sandiego?";
    var word_position = searchword.search("Carmen Sandiego");
    document.getElementById("Carmen_Sandiego").innerHTML = word_position;
}

//Number method example
function string_method() {
    var x= 182;
    document.getElementById("Number_to_string").innerHTML=x.toString();
}

//Precision method example
function precision_Method() {
    var specific_number = 65.43217;
    document.getElementById("Precision").innerHTML = specific_number.toPrecision(3);

}

//toFixed example
function fixit() {
    var fixed = 54.872;
    var z = fixed.toFixed(2);
    document.getElementById("Fixme").innerHTML = z;
}

//valueOf example
function true_value() {
    var str = "Value me";
    var res = str.valueOf();
    document.getElementById("absolute_value").innerHTML = res;
}