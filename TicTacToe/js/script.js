//This keeps track of whose turn it is
let activePlayer = "X";

//This array stores an array of moves, we use this to determine win conditions
let selectedSquares = [];

//This function is for placing an x or o in a square
function placeXOrO(squareNumber) {
    //A condition to make sure the square hasn't been selected already
    if (!selectedSquares.some(element => element.includes(squareNumber))) {         //Come back to this and try to change .includes
        let select = document.getElementById(squareNumber);
        if (activePlayer ==='X') {
            select.style.backgroundImage = 'url("images/x.png")';
        } else {
            select.style.backgroundImage = 'url("images/o.png")';
        }
        selectedSquares.push(squareNumber + activePlayer);
        checkWinConditions()
        if(activePlayer === 'X') {
            activePlayer = 'O';
        } else {
            activePlayer = 'X';
        }
        audio("./media/place.mp3");
        if(activePlayer === 'O') {
            disableClick();
            setTimeout(function (){ computersTurn(); }, 1000);
        }
        return true;
    } 
    //Starts a loop that generates a random square number and then searches to see if that square has been chosen already
    function computersTurn() {
        let success = false;
        let pickASquare;
        while(!success) {
            pickASquare = String(Math.floor(Math.random() * 9));
            if(placeXOrO(pickASquare)){
                placeXOrO(pickASquare);
                success = true;
            };
        }
    }

}


//Applies the arrayIncludes() function to an array, and checks if the array includes any of the following combinations.
function checkWinConditions() {
    if     (arrayIncludes('0X', '1X', '2X')) {drawWinLine(50, 100, 558, 100)}
    else if(arrayIncludes('3X', '4X', '5X')) {drawWinLine(50, 304, 558, 304)}
    else if(arrayIncludes('6X', '7X', '8X')) {drawWinLine(50, 508, 558, 508)}
    else if(arrayIncludes('0X', '3X', '6X')) {drawWinLine(100, 50, 100, 558)}
    else if(arrayIncludes('1X', '4X', '7X')) {drawWinLine(304, 50, 304, 558)}
    else if(arrayIncludes('2X', '5X', '8X')) {drawWinLine(508, 50, 508, 558)}
    else if(arrayIncludes('6X', '4X', '2X')) {drawWinLine(100, 508, 510, 90)}
    else if(arrayIncludes('0X', '4X', '8X')) {drawWinLine(100, 100, 520, 520)}
    else if(arrayIncludes('0O', '1O', '2O')) {drawWinLine(50, 100, 558, 100)}
    else if(arrayIncludes('3O', '4O', '5O')) {drawWinLine(50, 304, 558, 304)}
    else if(arrayIncludes('6O', '7O', '8O')) {drawWinLine(50, 508, 558, 508)}
    else if(arrayIncludes('0O', '3O', '6O')) {drawWinLine(100, 50, 100, 558)}
    else if(arrayIncludes('1O', '4O', '7O')) {drawWinLine(304, 50, 304, 558)}
    else if(arrayIncludes('2O', '5O', '8O')) {drawWinLine(508, 50, 508, 558)}
    else if(arrayIncludes('6O', '4O', '2O')) {drawWinLine(100, 508, 510, 90)}
    else if(arrayIncludes('0O', '4O', '8O')) {drawWinLine(100, 100, 520, 520)}
    else if(selectedSquares.length >= 9) {
        audio('./media/tie.mp3');
        setTimeout(function () { resetGame() }, 1000);
    }
    //
    function arrayIncludes(squareA, squareB, squareC) {
        const a = selectedSquares.includes(squareA);
        const b = selectedSquares.includes(squareB);
        const c = selectedSquares.includes(squareC);
    
        if (a === true && b === true && c === true) {return true}
    }
}
function disableClick() {
    body.style.pointerEvents='none';      //Makes the body of the document un-clickable 
    setTimeout(function() {body.style.pointerEvents = 'auto';}, 1000);      //makes the body clickable again after 1 second
}

// This function takes a string parameter for sounds e.g. ('./media/place.mp3'))
function audio(audioURL) {
    let audio = new Audio(audioURL);        //Making a new audio object to which we pass a parameter
    audio.play();       //calling the play method plays our audio
}

function drawWinLine(coordX1, coordY1, coordX2, coordY2) {
    const canvas = document.getElementById('win-lines')
    const c = canvas.getContext('2d');
    let x1 = coordX1,
        y1 = coordY1,
        x2 = coordX2,
        y2 = coordY2,
        x = x1,     //This stores temporary x axis data we update in our animation loop
        y = y1;     //Same as above but for the y axis

    function animateLinedrawing() {
        //This variable creates a loop
        const animationLoop = requestAnimationFrame(animateLinedrawing);
        c.clearRect(0, 0, 608, 608)                 //This method clears contrent from last loop iteration
        c.beginPath();                              //This method starts a new path
        c.moveTo(x1, y1);                           //This method moves us to a starting point for our line
        c.lineTo(x, y);                             //indicated the end point in our line
        c.lineWidth = 10;                           //sets the width of the line
        c.strokeStyle = 'rgba(70, 255, 33, .8)';    //sets the color of our line
        c.stroke();                                 //draws everything laid out above

        //determines whether the line should continue growing.
        if (x1 <= x2 && y1 <= y2) {
            if (x < x2) {x += 10;}
            if (y < y2) {y += 10;}
            if(x >= x2 && y >= y2) {cancelAnimationFrame(animationLoop);}
        }

        if(x1 <= x2 && y1 >= y2) {
            if(x < x2) {x += 10;}
            if(y > y2) {y-= 10;}
            if(x >= x2 && y <= y2) {cancelAnimationFrame(animationLoop);} 
        }
    }

    //Empty's the canvas
    function clear() {
        const animationLoop = requestAnimationFrame(clear);
        c.clearRect(0, 0, 608, 608);
        cancelAnimationFrame(animationLoop);
    }

    disableClick()
    audio('./media/winGame.mp3');
    animateLinedrawing();
    setTimeout(function () {clear(); resetGame();}, 1000);
}

//Clears all arrays and relevant variables to begin a new game.
function resetGame() {
    for (let i = 0; i < 9; i++) {
        let square = document.getElementById(String(i));
        square.style.backgroundImage = '';
    }
    selectedSquares = [];
}