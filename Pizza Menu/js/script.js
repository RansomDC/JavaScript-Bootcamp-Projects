
function getReceipt() {
    let text1 = "<h3>You Ordered: </h3>";               //Starts the string that will eventually be printed into the HTML
    letrunningTotal = 0;
    let sizeTotal = 0;
    let sizeArray = document.getElementsByClassName("size");    //retieves all of the possible sizes from the HTML
    for (let i = 0; i < sizeArray.length; i++) {            //Checks each size to see if it has been selected.
        if (sizeArray[i].checked) {
            var selectedSize = sizeArray[i].value;          
            text1 = text1 + selectedSize + "<br>"           //Adds the selected size to the text array
        }
    }
    // Gets the price of the pizza based on size chosen
    if (selectedSize === "Palm Sized Pizza") {
        sizeTotal = 4;
    } else if (selectedSize === "Personal Pizza") {
        sizeTotal = 6;
    } else if (selectedSize === "Small Pizza") {
        sizeTotal = 8;
    } else if (selectedSize === "Medium Pizza") {
        sizeTotal = 10;
    } else if (selectedSize === "Large Pizza") {
        sizeTotal = 14;
    }
    runningTotal = sizeTotal;                                   //Begins variable that will hold the full price
    console.log(selectedSize + " = $" + sizeTotal + ".00");
    console.log("size text1: " + text1);
    console.log("subtotal: $" + runningTotal + ".00");
    getTopping(runningTotal, text1); //Calls the next function, passing it important data from this function
};


function getTopping(runningTotal, text1) {
    let toppingTotal = 0;
    let selectedTopping = [];
    let toppingArray = document.getElementsByClassName("toppings");
    for (let j = 0; j < toppingArray.length; j++) {                                 // This loop was not working. added .length to toppingArray to fix it.
        if (toppingArray[j].checked) {                                              //This loop goes through an array of all toppings, check if they have been chosen      
            selectedTopping.push(toppingArray[j].value);                            //this adds all chosen topping to a separate array
            console.log("selected topping item: (" + toppingArray[j].value + ")");
            text1 = text1 + toppingArray[j].value + "<br>";
        }
    }
    //This adjusts the price so that every customer gets 1 free topping
    let toppingCount = selectedTopping.length;
    if (toppingCount > 1) {
        toppingTotal = (toppingCount - 1);
    } else {
        toppingTotal = 0;
    }
    runningTotal = (runningTotal + toppingTotal);
    console.log("total selected topping items: " + toppingCount);
    console.log(toppingCount + " topping - 1 free topping = $" + toppingTotal + ".00");        //removed + between " topping - 1 free topping = " and "$"
    console.log("topping: " + text1);                                                       //removed text1 from "topping text1: "
    console.log("Purchase Total = $" + runningTotal + ".00");                           // removed concat between "Purchase Total =  " and "$"
    //prints the Pizza size and the toppings chosen to the HTML
    document.getElementById("showText").innerHTML = text1;
    //Prints the total cost of the pizza to the HTML
    document.getElementById("totalPrice").innerHTML = "<h3>Total: <strong>$" + runningTotal + ".00" + "</strong></h3>";
}
