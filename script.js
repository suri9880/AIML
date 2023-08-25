document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // You can replace this with actual authentication logic
    if (username === "user" && password === "pass") {
        document.getElementById("error-message").textContent = "Login successful!";
    } else {
        document.getElementById("error-message").textContent = "Invalid username or password.";
    }
});
