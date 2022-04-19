const div = document.querySelector('div');
const para = document.createElement('p');

let x = 5;

//Data to write to the document giving examples of various math functions and methods.
document.write(typeof(x));
document.write(" ");        // Used to add spaces between items for ease of reading.
document.write(800 + "85");
document.write(" ");
document.write(0/0);
document.write(" ");
document.write(isNaN("string"));
document.write(" ");
document.write(isNaN(69));
document.write(" ");
document.write(2E310);
document.write(" ");
document.write(-2E310);
document.write(" ");
document.write(5 > 4);
document.write(" ");
document.write(5 < 4);

//Various console outputs, each with definitions for what each output should be for ease of reading in the console.
console.log("Math with console.log function");
console.log(4 + 4);
console.log("equality (non-type-specific) false");
console.log(4 == 5);
console.log("equality (non-type-specific) true");
console.log(4 == 4);
console.log("equality (type-specific) true");
console.log(4 === 4);
console.log("equality (type-specific) false");
console.log(4 === "5");
console.log("equality (type-specific) false");
console.log(4 === "4");
console.log("equality (type-specific) false");
console.log(4 === 5);
console.log("OR test output true");
console.log(4<5 || 4 == 5);
console.log("AND test output false");
console.log(4>5 && 4 == 5);
console.log("NOT operator output false");
console.log(!(true));
console.log("NOT operator output true");
console.log(!(false));