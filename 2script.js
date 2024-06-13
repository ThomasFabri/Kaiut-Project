document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault();

    // Get form values
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Simple authentication (replace with more secure methods in a real application)
    if (username === "demo" && password === "password") {
        // Redirect to the home page after successful login
        window.location.href = "./home.html";
    } else {
        alert("Invalid username or password. Please try again.");
    }

    // Clear the password field for security reasons
    document.getElementById("password").value = "";
});
