//Creating a variables to hold the locations of the output elements.
const slice = document.querySelector('#slice');
const concat = document.querySelector('#concat');
const tostring = document.querySelector('#toString');
const toPrecision = document.querySelector('#toPrecision');

//Assigning the test string
let testString = "The quick brown fox jumps over the lazy dog";
let testString2 = ", wow... That's a wild sentence!"

// Assigning the test number
let testNumber = 123456.789101112

// slicing a section of a string (the character from index position 16 stopping at index 20) and then setting that
// new string to the content of the <p> "output" element.
slice.textContent = (testString.slice(16, 20));

// concatenating two strings together using the concat() method
concat.textContent = (testString.concat(testString2));

//Converting a number to a string using the toString() method
let y = testNumber.toString();
tostring.textContent = y
tostring.textContent += (" which is now a " + (typeof(y)));     //This displays a message that the number has been converted to a string

//Using the toPrecision() method to decide a specific length for a number
toPrecision.textContent = testNumber.toPrecision(8);