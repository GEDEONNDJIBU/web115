const form = document.getElementById("name-form");
const greeting = document.getElementById("greeting");
const output = document.getElementById("fizzbuzz-output");

// Checks if a number is evenly divisible by another number
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

    // Divisors and their special words
    const fizzBuzzRules = [
        { divisor: 3, word: "Fizz!" },
        { divisor: 5, word: "Buzz!" },
        { divisor: 7, word: "BANG!" }
    ];

    const normalWord = "Let's Go!";
    const maximum = 140;

    output.innerHTML = "";

    for (let iCounter = 1; iCounter <= maximum; iCounter++) {

        let message = "";

        // Check every FizzBuzz rule
        for (let rule of fizzBuzzRules) {
            if (checkDivision(iCounter, rule.divisor)) {
                message += rule.word + " ";
            }
        }

        // If no rule matched, use the normal word
        if (message === "") {
            message = normalWord;
        }

        const paragraph = document.createElement("p");

        paragraph.textContent =
            iCounter + ". " + message.trim();

        output.appendChild(paragraph);
    }
});
