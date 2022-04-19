const para = document.getElementById("Math");
const disp = document.getElementById("display");
const rand = document.getElementById("rand");

function adds() {
    para.innerHTML = "4 + 4 = " + (4 + 4);
}

function subtracts() {
    para.innerHTML = "5 - 2 = " + (5 - 2);
}

function multiplys() {
    para.innerHTML = "6 x 8 = " + (6 * 8);
}

function divides() {
    para.innerHTML = "48 / 6 = " + (48 / 6);
}

function random() {
    para.innerHTML = "(3 - 2) * 6 / 6 + 5  = " + ((((3-2) * 6) / 6) + 5);
}

function modulus() {
    para.innerHTML = "10 % 4 = " + (10 % 4); 
}

function unary() {
    let x = 10;
   para.innerHTML = "A negation value of 10 would be: " + -x;
}

function iterUp() {
    let x = disp.textContent;
    x = Number(x);
    disp.textContent = ++x;
}

function iterDown() {
    let x = disp.textContent;
    x = Number(x);
    disp.textContent = --x;
}

function random() {
    rand.textContent = (Math.random() * 100);
}