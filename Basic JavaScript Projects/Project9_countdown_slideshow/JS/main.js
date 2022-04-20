// Declares that slide number 1 will be shown first
let slideIndex = 1;

// Calls our showSlides() function at the given index (which was just set to 1)
showSlides(slideIndex);

//A function which changes the slide index number and then calls showSlides() again
function changeSlides(n) {
    showSlides(slideIndex += n)
}

//Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}


function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {        //Takes you back to slide 1 if you cycle past the last slide
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;     //Takes you back to the last slide if you cycle before slide 1
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";   //Cycles through all of the "slides" nodes and changes their display type so that they aren't visible
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");       //Cycles through all of the "dots" nodes and changes any instances of their class being "active" to blank
    }
    slides[slideIndex-1].style.display = "block";       //Makes the indicated slide appear
    dots[slideIndex-1].className += " active";          //Makes the indicated dot darken
}

function countDown() {
    let seconds = document.getElementById("seconds").value;

    function tick() {
        seconds = seconds - 1;
        timer.innerHTML = seconds;
        let time = setTimeout(tick, 1000);
        if (seconds == -1) {
            alert("Time's up!");
            clearTimeout(time);
            timer.innerHTML = "";
        }
    }
    tick();
}