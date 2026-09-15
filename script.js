const form = document.getElementById("name-form");
const greeting = document.getElementById("greeting");
const output = document.getElementById("fizzbuzz-output");

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

    // Easy-to-change FizzBuzz settings
    const firstNumber = 3;
    const secondNumber = 5;

    const normalWord = "Let's Go!";
    const firstWord = "Fizz!";
    const secondWord = "Buzz!";

    const maximum = 140;

    output.innerHTML = "";

    for (let i = 1; i <= maximum; i++) {

        let message = normalWord;

        if (i % firstNumber === 0 && i % secondNumber === 0) {
            message = firstWord + " " + secondWord;
        } else if (i % firstNumber === 0) {
            message = firstWord;
        } else if (i % secondNumber === 0) {
            message = secondWord;
        }

        const paragraph = document.createElement("p");
        paragraph.textContent = i + ". " + message;

        output.appendChild(paragraph);
    }
});
