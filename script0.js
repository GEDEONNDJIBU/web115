const form = document.getElementById("name-form");
const greeting = document.getElementById("greeting");
const output = document.getElementById("fizzbuzz-output");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    // Get user's name
    const firstName = document.getElementById("first-name").value;
    const middleName = document.getElementById("middle-name").value;
    const lastName = document.getElementById("last-name").value;

    // Create full name
    let fullName = firstName;

    // Add middle initial if entered
    if (middleName !== "") {
        fullName += " " + middleName + ".";
    }

    // Add last name
    fullName += " " + lastName;

    // Display personalized greeting
    greeting.textContent =
        "Welcome to Mangoose Restaurant, " + fullName + "!";

    // Clear previous output
    output.innerHTML = "";

    // Create 125 lines
    for (let i = 1; i <= 125; i++) {
        let message = i;

        if (i % 3 === 0 && i % 5 === 0) {
            message = "Chicken Fries";
        } else if (i % 3 === 0) {
            message = "Chicken";
        } else if (i % 5 === 0) {
            message = "Fries";
        }

        const paragraph = document.createElement("p");
        paragraph.textContent = i + ") " + message;
        output.appendChild(paragraph);
    }
});