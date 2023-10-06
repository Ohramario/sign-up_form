
let myInput = document.getElementById("init-password");
let confirmInput = document.getElementById("c-password");
let confirmMessage = document.getElementById("message3")
let letter = document.getElementById("letter");
let capital = document.getElementById("capital");
let number = document.getElementById("number");
let length = document.getElementById("length");

confirmMessage.style.display = "none";

// When the user clicks on the password field, show the message box
myInput.onfocus = function () {
    document.getElementById("message").style.display = "block";
}
// When the user clicks outside of the password field, hide the message box
myInput.onblur = function () {
    document.getElementById("message").style.display = "none";
}


// When the user clicks on the confirm password field, show the message box
confirmInput.onfocus = function () {
  change();
}
confirmInput.onkeyup = function () {
    change();
}
// When the user clicks outside of the confirm password field, hide the message box
confirmInput.onblur = function () {
    document.getElementById("message2").style.display = "none";
    document.getElementById("message3").style.display = "none";
}

// When the user starts to type something inside the password field
myInput.onkeyup = function () {
    // Validate lowercase letters
    var lowerCaseLetters = /[a-z]/g;
    if (myInput.value.match(lowerCaseLetters)) {
        letter.classList.remove("invalid");
        letter.classList.add("valid");
    } else {
        letter.classList.remove("valid");
        letter.classList.add("invalid");
    }

    // Validate capital letters
    var upperCaseLetters = /[A-Z]/g;
    if (myInput.value.match(upperCaseLetters)) {
        capital.classList.remove("invalid");
        capital.classList.add("valid");
    } else {
        capital.classList.remove("valid");
        capital.classList.add("invalid");
    }

    // Validate numbers
    var numbers = /[0-9]/g;
    if (myInput.value.match(numbers)) {
        number.classList.remove("invalid");
        number.classList.add("valid");
    } else {
        number.classList.remove("valid");
        number.classList.add("invalid");
    }

    // Validate length
    if (myInput.value.length >= 8) {
        length.classList.remove("invalid");
        length.classList.add("valid");
    } else {
        length.classList.remove("valid");
        length.classList.add("invalid");
    }
}
function check() {

    return ((myInput.value == confirmInput.value) && (myInput.value != ""));
        
    
}
function change() {
    if (check()) {
        document.getElementById("message3").style.display = "block";
        document.getElementById("message2").style.display = "none";
        
    } else {
        document.getElementById("message2").style.display = "block";
        document.getElementById("message3").style.display = "none";
    }
}

