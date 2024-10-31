const form = document.getElementById("quizForm");

const fnameError = document.getElementById("fnameError");
const lnameError = document.getElementById("lnameError");
const emailError = document.getElementById("emailError");

const q1Info = document.getElementById("q1Info");
const q2Info = document.getElementById("q2Info");
const q3Info = document.getElementById("q3Info");

const submitError = document.getElementById("submitError");

form.addEventListener("submit", function(event) {

    event.preventDefault();

    clearErrors();

    let isValid = true;
    let score = 0;

    // Validate first name
    const firstName = document.getElementById("fname");
    if (!firstName.value.match(/^[A-Za-z]+$/)) {
        isValid = false;
        fnameError.textContent = "First name should only contain letters"
    }

    // Validate last name
    const lastName = document.getElementById("lname");
    if (!lastName.value.match(/^[A-Za-z]+$/)) {
        isValid = false;
        lnameError.textContent = "Last name should only contain letters"
    }

    // Validate email
    const email = document.getElementById("email");
    if (!email.value.includes('@')) {
        isValid = false;
        emailError.textContent = "Invalid email, address should contain @"
    }

    // Validate question 1
    const q1 = document.querySelectorAll('input[name="colors"]:checked');
    if (q1.length === 0) {
        isValid = false;
        q1Info.textContent = "Please answer this question"
    } else if (q1[0].id === "Blue") {
        score++;
    } else {
        q1Info.textContent = "0/1 correct"
    }

    // Validate question 2
    const q2 = document.getElementById("q2");
    if (q2.value.trim() === '') {
        isValid = false;
        q2Info.textContent = "Please answer this question"
    }

    // Validate question 3
    const q3 = document.querySelectorAll('input[name="languages"]');
    const q3Answers = [];
    const q3Right = ['C++', 'Python', 'JavaScript'];
    const q3Wrong = ['Linux', 'Windows'];
    q3.forEach(option => {
        if (option.checked) {
            q3Answers.push(option.value);
        }
    });
    for (let i = 0; i < q3Right.length; i++) { // Loop through correct answers and award a point for each
        if (q3Answers.includes(q3Right[i])) {
            score++;
        }
    }
    for (let i = 0; i < q3Wrong.length; i++) { // Subtract a point for each incorrect answer
        if (q3Answers.includes(q3Wrong[i])) {
            score--;
        }
    }

    // Check if all criteria are met for submission
    if (isValid) {
        alert(`Your answers were submitted successfully. Thank you for participating.\nYou scored ${score} points out of 6.`)
    } else {
        alert("Missing answers or invalid inputs")
        //submitError.textContent = "Missing answers or invalid inputs"
    }

    console.log(q3Answers)
    console.log(score)
});

function clearErrors() {
    const errors = document.querySelectorAll(".inputError");
    errors.forEach(error => error.innerText = "");
}