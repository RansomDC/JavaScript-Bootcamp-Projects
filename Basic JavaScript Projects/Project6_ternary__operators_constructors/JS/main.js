//A function which takes a number input from an HTML input and returns if the age input is old enough to vote.
function oldEnough() {
    let age, response;
    age = document.getElementById("age").value;
    response = (age < 18) ? "You're nothing but a baby! A baby! You can't vote!":"You look like you're about to fall apart! You must be old enough to vote!";
    document.getElementById("result").innerHTML = response;
}




//A function to add two elements to an undefined object
function vehicle(make, model) {
    this.vehicleMake = make;
    this.vehicleModel = model;
}
 
//Creating a new  object called "jack" and calling the vehicle() fuction to add information to it via the arguments
let jack = new vehicle("Dodge", "Viper");
 
//prints the content of the the chosen object with additional information/text.
function print(object) {
    document.getElementById("keywordsAndConstructors").innerHTML = "Jack drives a " + object.vehicleMake + " " + object.vehicleModel + ".";
}

//practice nested function. The nested function (subfunction()) concatenates two strings and returns them. The parent function prints that string to the display.
function upper() {
    const disp = document.getElementById("nestedFunction");
    function subFunction() {
        return ("A tinier function " + "inside of a function?");
    };
    disp.textContent = subFunction();
}
