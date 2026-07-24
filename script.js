
let forms = document.getElementById('formm');

forms.addEventListener("submit", function (events) {

    events.preventDefault();

    let name = document.getElementById('std_name').value;
    let ftname = document.getElementById('ft_name').value;
    let email = document.getElementById('std_email').value;
    let course = document.getElementById('select_course').value;
    let age = document.getElementById('std_age').value;
    let date = new Date().toLocaleDateString();

    if (name === "") {
        alert("Name is required");
    }
    if (ftname === "") {
        alert("Father name is required");
    }
    if (age === "") {
        alert("Age is required");
    }
    if (email === "") {
        alert("email is required");
    }
    if (course === "") {
        alert("course is required");
    }

    if (name === "" || ftname === "" || email === "" || age === ""
        || course === "") {
        return;
    }
    if (age < 15 || age > 35) {
        alert("Age should be 15-35");
    }

    let output = document.getElementById('output_div');
    forms.addEventListener("reset", function () {
        document.getElementById('output_div').innerHTML = "";
    })

    output.innerHTML =
        "<h2>Registration Successful</h2>" +
        "<p>Name: " + name + "</p>" +
        "<p>Father Name: " + ftname + "</p>" +
        "<p> Age: " + age + "</p>" +
        "<p>E-mail: " + email + "</p>" +
        "<p>Course: " + course + "</p>" +
        "<p>Date: " + date + "</p>";

    output.style.display = "block";
    output.style.backgroundColor = " background:linear-gradient(to right, #9bc5c3, #616161);"
});

