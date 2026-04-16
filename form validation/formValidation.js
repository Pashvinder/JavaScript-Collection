document.getElementById("myform").addEventListener("submit", function (e) {

    let name = document.getElementById("name").value;
    let email = document.getElementById("mail").value;
    let number = document.getElementById("number").value;
    let password = document.getElementById("pass").value;

    if (name === "") {
        alert("Name cannot be empty");
        e.preventDefault();
    }

    if (!email.includes("@")) {
        alert("Enter valid Email");
        e.preventDefault();
    }

    let contactPattern = /^[0-9]{10}$/;
    if (!contactPattern.test(number)) {
        alert("Enter valid 10 digit contact number");
        e.preventDefault();
    }

    let passwordPattern = /^(?=.*[A-Z])(?=.*\d).{6,}$/;
    if (!passwordPattern.test(password)) {
        alert("Password must be at least 6 characters long and include 1 uppercase letter and 1 number");
        e.preventDefault();
    }

});