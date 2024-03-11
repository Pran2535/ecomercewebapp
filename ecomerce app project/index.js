function validateForm() {
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;

    // Check if any field is empty
    if (username === "" || email === "" || password === "" || confirmPassword === "") {
        alert("Please fill in all fields.");
        return false; // Prevent form submission
    }

    // Check if password and confirm password match
    if (password !== confirmPassword) {
        alert("Passwords do not match.");
        return false; // Prevent form submission
    }

    // Check if email is in a valid format
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert("Please enter a valid email address.");
        return false; // Prevent form submission
    }

    // If all validations pass, the form can be submitted
    return true;
}

// Add event listener for form submission
document.querySelector('form').addEventListener('submit', function(event) {
    // Call the validateForm function before submitting the form
    if (!validateForm()) {
        event.preventDefault(); // Prevent default form submission if validation fails
    }
});
