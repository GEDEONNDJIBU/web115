const form = document.getElementById("introForm");
const output = document.getElementById("output");

const addCourseButton = document.getElementById("addCourse");
const removeCourseButton = document.getElementById("removeCourse");
const courseFields = document.getElementById("courseFields");

let courseCount = 1;


addCourseButton.addEventListener("click", function () {

    courseCount++;

    const courseDiv = document.createElement("div");
    courseDiv.className = "course";

    const label = document.createElement("label");
    label.setAttribute("for", "course" + courseCount);
    label.textContent = "Course " + courseCount + ":";

    const input = document.createElement("input");

    input.type = "text";
    input.id = "course" + courseCount;
    input.name = "courses";
    input.required = true;

    courseDiv.appendChild(label);
    courseDiv.appendChild(input);

    courseFields.appendChild(courseDiv);
});


removeCourseButton.addEventListener("click", function () {

    const courses = document.querySelectorAll(".course");

    if (courses.length > 1) {
        courses[courses.length - 1].remove();
    }

});






form.addEventListener("submit", function (event) {

    event.preventDefault();

    const firstname =
        document.getElementById("firstname").value;

    const lastname =
        document.getElementById("lastname").value;

    const mascot =
        document.getElementById("mascot").value;

    const personal =
        document.getElementById("personal").value;

    const professional =
        document.getElementById("professional").value;

    const academic =
        document.getElementById("academic").value;

    const subjectBackground =
        document.getElementById("subjectBackground").value;

    const computer =
        document.getElementById("computer").value;

    const funny =
        document.getElementById("funny").value;

    const share =
        document.getElementById("share").value;


    const courseInputs =
        document.querySelectorAll('input[name="courses"]');

    let courseList = "";

    courseInputs.forEach(function (course) {

        if (course.value.trim() !== "") {
            courseList += `<li>${course.value}</li>`;
        }

    });


    output.innerHTML = `
        <h2>${firstname} ${lastname}'s Introduction</h2>

        <h3>${firstname} ${lastname} | ${mascot}</h3>

        <ul>
            <li>
                <strong>Personal Background:</strong>
                ${personal}
            </li>

            <li>
                <strong>Professional Background:</strong>
                ${professional}
            </li>

            <li>
                <strong>Academic Background:</strong>
                ${academic}
            </li>

            <li>
                <strong>Background in this Subject:</strong>
                ${subjectBackground}
            </li>

            <li>
                <strong>Primary Computer Platform:</strong>
                ${computer}
            </li>

            <li>
                <strong>Courses I'm Taking:</strong>

                <ul>
                    ${courseList}
                </ul>
            </li>

            <li>
                <strong>Funny/Interesting Item:</strong>
                ${funny}
            </li>

            <li>
                <strong>Something I'd Like to Share:</strong>
                ${share}
            </li>
        </ul>
    `;

    form.hidden = true;
    output.hidden = false;

});



