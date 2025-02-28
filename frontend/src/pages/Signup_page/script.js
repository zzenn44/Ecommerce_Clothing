document.addEventListener("DOMContentLoaded", function () {
    const authForm = document.getElementById("authForm");
    const nameField = document.getElementById("nameField");
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");
    const toggleForm = document.getElementById("toggleForm");
    const formTitle = document.getElementById("formTitle");
    const submitBtn = document.getElementById("submitBtn");

    const nameError = document.getElementById("nameError");
    const emailError = document.getElementById("emailError");
    const passwordError = document.getElementById("passwordError");

    let isSignUp = true; // Tracks if the form is in Sign Up mode

    // Toggle between Sign Up & Login
    toggleForm.addEventListener("click", function () {
        isSignUp = !isSignUp;
        formTitle.textContent = isSignUp ? "Sign Up" : "Login";
        submitBtn.textContent = isSignUp ? "Sign Up" : "Login";
        toggleForm.textContent = isSignUp ? "Login Here" : "Create account";
        nameField.style.display = isSignUp ? "block" : "none"; // Hide/show name field
    });

    // Form validation function
    function validateForm() {
        let isValid = true;
        nameError.textContent = "";
        emailError.textContent = "";
        passwordError.textContent = "";

        if (isSignUp && nameInput.value.trim() === "") {
            nameError.textContent = "Name is required";
            isValid = false;
        }

        if (emailInput.value.trim() === "") {
            emailError.textContent = "Email is required";
            isValid = false;
        } else if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(emailInput.value)) {
            emailError.textContent = "Invalid email format";
            isValid = false;
        }

        if (passwordInput.value.trim() === "") {
            passwordError.textContent = "Password is required";
            isValid = false;
        } else if (passwordInput.value.length < 6) {
            passwordError.textContent = "Password must be at least 6 characters";
            isValid = false;
        }

        return isValid;
    }

    // Form submission handler
    authForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent form submission

        if (!validateForm()) return; // Stop if validation fails

        alert(isSignUp ? "Account created successfully!" : "Login successful!");
        authForm.reset(); // Reset the form after submission

        if (isSignUp) {
            window.location.href = "Home.jsx"; // Redirect to Home.jsx after signup
        }
    });
});