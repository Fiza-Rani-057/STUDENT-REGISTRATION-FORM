
 let forms = document.getElementById('formm');

 forms.addEventListener("submit", function (events) {

    events.preventDefault();

    let name = document.getElementById('std_name').value;
    let ftname = document.getElementById('ft_name').value;
    let email = document.getElementById('std_email').value;
    let course = document.getElementById('select_course').value;

    if (name === "" || ftname === "" || email === "") {
        alert("Please fill this  feilds");
    }
    if(name === ""|| ftname === "" || email === "" ){
        return;
    }


    let output = document.getElementById('output_div');
    forms.addEventListener("reset", function(){
        document.getElementById('output_div').innerHTML = "";
    })

    output.innerHTML =
        "<h2>Registration Successful</h2>" +
        "<p>Name: " + name + "</p>" +
        "<p>Father Name: " + ftname + "</p>" +
        "<p>E-mail: " + email + "</p>" +
        "<p>Course: " + course + "</p>";

    output.style.display = "block";
    output.style.backgroundColor = navy;

});

