const form = document.getElementById("name-form");
const greeting = document.getElementById("greeting");
const output = document.getElementById("fizzbuzz-output");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    // Get the user's name
    const firstName = document.getElementById("first-name").value;
    const middleName = document.getElementById("middle-name").value;
    const lastName = document.getElementById("last-name").value;

    // Create the full name
    let fullName = firstName;

    // Only add middle initial if the user entered one
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
        const paragraph = document.createElement("p");

        paragraph.textContent = i + ") Mangoose Kitchen";

        output.appendChild(paragraph);
    }
});