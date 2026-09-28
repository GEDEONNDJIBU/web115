const form = document.getElementById("name-form");
const greeting = document.getElementById("greeting");
const output = document.getElementById("fizzbuzz-output");


// Check if a number is divisible by another number
function checkDivision(number, divisor) {
    return number % divisor === 0;
}


form.addEventListener("submit", function(event) {

    event.preventDefault();


    // Get the user's name
    const firstName =
        document.getElementById("first-name").value;

    const middleName =
        document.getElementById("middle-name").value;

    const lastName =
        document.getElementById("last-name").value;


    let fullName = firstName;

    if (middleName !== "") {
        fullName += " " + middleName;
    }

    fullName += " " + lastName;


    greeting.textContent =
        "Welcome, " + fullName + "!";


    // Get the three divisors
    const divisor1 =
        Number(document.getElementById("divisor1").value);

    const divisor2 =
        Number(document.getElementById("divisor2").value);

    const divisor3 =
        Number(document.getElementById("divisor3").value);


    // Get the three words
    const word1 =
        document.getElementById("word1").value;

    const word2 =
        document.getElementById("word2").value;

    const word3 =
        document.getElementById("word3").value;


    // Get default word
    const defaultWord =
        document.getElementById("default-word").value;


    // Get total
    const total =
        Number(document.getElementById("total").value);


    // Store the rules
    const fizzBuzzRules = [
        { divisor: divisor1, word: word1 },
        { divisor: divisor2, word: word2 },
        { divisor: divisor3, word: word3 }
    ];


    // Clear previous results
    output.innerHTML = "";


    // Generate the numbers
    for (let iCounter = 1; iCounter <= total; iCounter++) {

        let words = [];


        // Check all three rules
        for (let rule of fizzBuzzRules) {

            if (checkDivision(iCounter, rule.divisor)) {
                words.push(rule.word);
            }

        }


        let message;

        if (words.length > 0) {
            message = words.join(", ");
        } else {
            message = defaultWord;
        }


        const paragraph =
            document.createElement("p");

        paragraph.textContent =
            iCounter + ". " + message;

        output.appendChild(paragraph);
    }

});
