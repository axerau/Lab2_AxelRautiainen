const form = document.getElementById("quizForm");

const fnameError = document.getElementById("fnameError");
const lnameError = document.getElementById("lnameError");
const emailError = document.getElementById("emailError");

const q1Info = document.getElementById("q1Info");
const q2Info = document.getElementById("q2Info");
const q3Info = document.getElementById("q3Info");
const q4Info = document.getElementById("q4Info");
const q5Info = document.getElementById("q5Info");

form.addEventListener("submit", function(event) {

    event.preventDefault();

    clearErrors();

    let isValid = true;
    let score = 0;

    // Validate first name (check if not empty + only contains letters)
    const firstName = document.getElementById("fname");
    if (firstName.value.trim() === '') {
        isValid = false;
        fnameError.textContent = "First name is required";
    } else if (!firstName.value.match(/^[A-Za-z]+$/)) {
        isValid = false;
        fnameError.textContent = "First name should only contain letters";
    }

    // Validate last name (check if not empty + only contains letters)
    const lastName = document.getElementById("lname");
    if (lastName.value.trim() === '') {
        isValid = false;
        lnameError.textContent = "Last name is required";
    } else if (!lastName.value.match(/^[A-Za-z]+$/)) {
        isValid = false;
        lnameError.textContent = "Last name should only contain letters";
    }

    // Validate email (check if not empty + contains @)
    const email = document.getElementById("email");
    if (email.value.trim() === '') {
        isValid = false;
        emailError.textContent = "Email is required";
    } else if (!email.value.includes('@')) {
        isValid = false;
        emailError.textContent = "Invalid email, address should contain @";
    }

    // Validate question 1
    const q1 = document.querySelectorAll('input[name="colors"]:checked');
    let q1Incorrect = false;
    if (q1.length === 0) {
        isValid = false;
        q1Info.textContent = "Please answer this question";
    } else if (q1[0].id === "Blue") {
        score++;
    } else {
        q1Incorrect = true;
    }

    // Validate question 2
    const q2 = document.getElementById("q2");
    if (q2.value.trim() === '') {
        isValid = false;
        q2Info.textContent = "Please answer this question";
    }

    // Validate question 3
    const q3 = document.querySelectorAll('input[name="languages"]');
    const q3Answers = [];
    const q3Right = ['C++', 'Python', 'JavaScript'];
    const q3Wrong = ['Linux', 'Windows'];
    let awarded = 0;
    let numOfRightAnswers = 0;
    let numOfWrongAnswers = 0;
    q3.forEach(option => {
        if (option.checked) {
            q3Answers.push(option.value);
        }
    });
    for (let i = 0; i < q3Right.length; i++) { // Loop through correct answers and award a point for each
        if (q3Answers.includes(q3Right[i])) {
            awarded++;
            numOfRightAnswers++;
        }
    }
    for (let i = 0; i < q3Wrong.length; i++) { // But if an incorrect answer is chosen, award 0 points for this question
        if (q3Answers.includes(q3Wrong[i])) {
            awarded = 0;
            numOfWrongAnswers++;
        }
    }
    score = score + awarded;

    // Validate question 4
    const q4 = document.querySelectorAll('input[name="capitals"]:checked');
    let q4Incorrect = false;
    if (q4.length === 0) {
        isValid = false;
        q4Info.textContent = "Please answer this question";
    } else if (q4[0].id === "brussels") {
        score++;
    } else {
        q4Incorrect = true;
    }

    // Validate question 5
    const q5 = document.getElementById("q5");
    let q5Incorrect = false;
    if (q5.value.trim() === '') {
        isValid = false;
        q5Info.textContent = "Please answer this question";
    } else if (!q5.value.trim().match(/^\d+$/)) {
        isValid = false;
        q5Info.textContent = "Please only enter a number";
    } else if (q5.value.trim() === "110") {
        score++;
    } else {
        q5Incorrect = true;
    }

    // Check if all criteria are met for submission
    if (isValid) {
        alert(`Your answers were submitted successfully. Thank you for participating.\nYou scored ${score} points out of 6.`)
        if (q1Incorrect) {
            q1Info.textContent = "Incorrect";
        } else {
            q1Info.textContent = "Correct!";
        }

        q3Info.textContent = `${numOfRightAnswers}/3 correct, ${numOfWrongAnswers} incorrect`;

        if (q4Incorrect) {
            q4Info.textContent = "Incorrect";
        } else {
            q4Info.textContent = "Correct!";
        }

        if (q5Incorrect) {
            q5Info.textContent = "Incorrect";
        } else {
            q5Info.textContent = "Correct!";
        }

    } else {
        alert("Missing answers or invalid inputs")
    }

});

function clearErrors() {
    const errors = document.querySelectorAll(".inputError");
    errors.forEach(error => error.innerText = "");
}