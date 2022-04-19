//Declaring a global variable
let global = 10;

//Bugged function
function bugged() {
    function subfunc() {
        let x = 10;
    }
    console.log(x);
}
// Calling above function will result in an error. stating that x is not defined since
// the scope of x is outside of what bugged() can reach.
// repair would include removing the nested function subfunc() from bugged().


//Fixed version of the above function
function buggedFixed() {
    let x = 10;             //local variable
    console.log(x);
}
// Calling the fixed function
buggedFixed();



//If statement practice. This function will print a greeting messages based off of the time of day input by the user.
function greeting() {
    const hours = document.getElementById("TOD").value;  //another local variable
    const disp = document.getElementById("message");
    if (hours < "12:00") {
        disp.innerHTML = "Good morning!";
    } else if (hours >= "12:00" && hours <= "16:00") {
        disp.innerHTML = "Good afternoon!";
    } else if (hours > "16:00" && hours < "21:00") {
        disp.innerHTML = "Good evening!"
    } else {
        disp.innerHTML = "good night!"
    }
}