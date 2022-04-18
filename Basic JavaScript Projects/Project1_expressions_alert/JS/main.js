function toot() {
let str = "Farts everywhere!";                                       //Assigns the string "Farts everywhere!" to the str variable                                       
    document.getElementById("Button_Text").innerHTML = str;          //Selects the first button element and changes it's content to str
    alert("Toot!");                                                  //Brings up an alert with the included string
    document.write("Braap!");                                        //Adds a string to the document.                                
    document.write(str.fontcolor('brown'));                          //writes the variable str to the screen colored brown
    document.write('I write code like a ' + (6 + 6) + ' year old.'); //Adds two numbers and writes them to the screen.
}

