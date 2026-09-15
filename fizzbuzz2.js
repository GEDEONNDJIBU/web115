const form = document.getElementById("name-form");
const greeting = document.getElementById("greeting");
const output = document.getElementById("fizzbuzz-output");

// Function that checks division
function checkDivision(number, divisor) {
    return number % divisor === 0;
}

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const firstName = document.getElementById("first-name").value;
    const middleName = document.getElementById("middle-name").value;
    const lastName = document.getElementById("last-name").value;

    let fullName = firstName;

    if (middleName !== "") {
        fullName += " " + middleName;
    }

    fullName += " " + lastName;

    greeting.textContent = "Welcome, " + fullName + "!";

    // FizzBuzz settings
    const firstDivisor = 3;
    const secondDivisor = 5;

    const normalWord = "Let's Go!";
    const firstWord = "Fizz!";
    const secondWord = "Buzz!";

    const maximum = 140;

    output.innerHTML = "";

    for (let iCounter = 1; iCounter <= maximum; iCounter++) {

        let message = normalWord;

        if (
            checkDivision(iCounter, firstDivisor) &&
            checkDivision(iCounter, secondDivisor)
        ) {
            message = firstWord + " " + secondWord;
        } else if (checkDivision(iCounter, firstDivisor)) {
            message = firstWord;
        } else if (checkDivision(iCounter, secondDivisor)) {
            message = secondWord;
        }

        const paragraph = document.createElement("p");

        paragraph.textContent =
            iCounter + ". " + message;

        output.appendChild(paragraph);
    }
});
