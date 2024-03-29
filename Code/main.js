function validateForm() {
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var resume = document.getElementById("resume").value;
    var coverLetter = document.getElementById("coverLetter").value;
    var references = document.getElementById("references").value;

    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (firstName === "" || lastName === "" || email === "" || phone === "" || resume === "" || coverLetter === "" || references === "") {
        alert("Please fill in all fields.");
        return false;
    }

    if (!email.match(emailRegex)) {
        alert("Please enter a valid email address.");
        return false;
    }

    // Additional validation logic can be added as needed

    return true;
}
