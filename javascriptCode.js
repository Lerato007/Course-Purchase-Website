/* Validation if the user left the spaces blank*/
function validateForm() {
    var x = document.forms["myForm"]["userN"].value;
    var y = document.forms["myForm"]["passW"].value;

    if (x == "" || y == "") {
        alert("Cannot leave the spaces blank. Please fill in your details!");
        return false;
    }
}

function ValidateEmail(inputText) {

    var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (inputText.value.match(mailformat)) {
        alert("Valid email address!");
        document.myForm.userN.focus();
        return true;
    }
    else {
        alert("You have entered an invalid email address. Please try again!");
        document.myForm.userN.focus();
        return false;
    }
}


/* Validates if the correct format of an email is used*/

function validation() {
    var form = document.getElementById("myForm");
    var email = document.getElementById("email").value;
    var text = document.getElementById("text");
    var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/

    if (email.match(pattern)) {
        form.classList.add("valid");
        form.classList.remove("invalid");
        text.innerHTML = "Email address is valid.";
        text.style.color = "rgb(228, 255, 2)";
        text.style.fontSize = "small";

    } else {
        form.classList.remove("valid");
        form.classList.add("invalid");
        text.innerHTML = "Enter a valid email address.";
        text.style.color = "rgb(228, 255, 2)";
        text.style.fontSize = "small";

    }

    if (email == "") {
        form.classList.remove("valid");
        form.classList.remove("invalid");
        text.innerHTML = "";
        text.style.color = "rgb(228, 255, 2)";
        text.style.fontSize = "small";
    }

}