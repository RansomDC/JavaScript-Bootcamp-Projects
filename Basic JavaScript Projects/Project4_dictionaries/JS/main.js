function my_Dictionary() {      //create a function that will declare an object, delete and item from it, and then return the value of one of the key-value pairs to our HTML.
    let cryptid = {             //Declare an object
        species: "Nessiteras rhombopteryx",
        color: "Black",
        habitat: "Lakes",
        commonName: "Nessie",
    };
    delete cryptid.color;       //remove the value cryptid.color from the object above
    document.getElementById("Dictionary").innerHTML = cryptid.color;        //input value from a key to an element with the id "Dictionary"
}