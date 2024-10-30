const form = document.getElementById("quizForm");

const firstName = document.getElementById("fname");
const lastName = document.getElementById("lname");
const email = document.getElementById("email");
const q2 = document.getElementById("q2");

const fnameError = document.getElementById("fnameError");
const lnameError = document.getElementById("lnameError");
const emailError = document.getElementById("emailError");

const q2error = document.getElementById("q2error");

const submitError = document.getElementById("submitError");

form.addEventListener("submit", function(event) {

    event.preventDefault();

    clearErrors();

    let isValid = true;

    if (!firstName.value.match(/^[A-Za-z]+$/)) {
        isValid = false;
        fnameError.textContent = "First name should only contain letters"
    }

    if (!lastName.value.match(/^[A-Za-z]+$/)) {
        isValid = false;
        lnameError.textContent = "Last name should only contain letters"
    }

    if (!email.value.includes('@')) {
        isValid = false;
        emailError.textContent = "Invalid email, address should contain @"
    }

    if (q2.value.trim() === '') {
        isValid = false;
        q2error.textContent = "Please answer this question"
    }

    if (isValid) {
        alert("Your answers were submitted successfully. Thank you for participating.")
    } else {
        submitError.textContent = "Missing answers or invalid inputs"
    }
});

function clearErrors() {
    const errors = document.querySelectorAll(".inputError");
    errors.forEach(error => error.innerText = "");
}