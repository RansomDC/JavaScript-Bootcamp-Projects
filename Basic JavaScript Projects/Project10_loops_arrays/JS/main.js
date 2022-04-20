//Creates a function that initiates a while loop that counts from 0 to 10
function whileLoop() {
    let counter = 0
    while (counter <= 10) {
        document.getElementById("whileLoop").textContent += (counter + " ");
        counter++;
    }
}

//Creates a function that initiates a for loop that counts from 10 to 0
function forLoop() {
    for (let counter = 10; counter >= 0; counter--) {
        document.getElementById("forLoop").textContent += (counter + " ");
    }
}

//Creates a function that uses a random number generator and an array to pick a random greeting when you click a button
function randomGreeting() {
    const greetings = ["Hello!", "Good morning!", "G'day!", "Hullo!", "Salut!", "Hi!"];
    function random(max) {
        return Math.floor(Math.random() * max)
    }
    document.getElementById("greeting").textContent = greetings[random(greetings.length)];
}

//Creates an object declaring the sizes of the sides of a rectangle, as well as a function for calculating the area
let rectangle = {
    height: "24",
    width: "24",
    area: function() {
        document.getElementById("box").textContent = (this.height * this.width);
    }
}

