function toggleForm() {
    const loginForm = document.getElementById("loginForm");
    const registerForm = document.getElementById("registerForm");
    const formTitle = document.getElementById("formTitle");

    if (loginForm.style.display === "none") {
        loginForm.style.display = "block";
        registerForm.style.display = "none";
        formTitle.textContent = "Sign In";
    } else {
        loginForm.style.display = "none";
        registerForm.style.display = "block";
        formTitle.textContent = "Create account";
    }
}

function loginUser() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (email && password) {
        alert("Login successful");
        // Add logic to verify user credentials
    } else {
        alert("Please fill in all fields");
    }
}

function registerUser() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("emailRegister").value;
    const password = document.getElementById("passwordRegister").value;

    if (name && email && password) {
        alert("Registration successful");
        // Add logic to register user
    } else {
        alert("Please fill in all fields");
    }
}
