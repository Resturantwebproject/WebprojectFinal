document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
  
    // Get the username and password from the form
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
  
    // Replace these with actual username and password for authentication
    const validUsername = "yassinlabib";
    const validPassword = "1234";
  
    // Check if the entered credentials are valid
    if (username === validUsername && password === validPassword) {
      // Redirect to the admin dashboard or perform other actions here
      window.location.href = "admin_dashboard.html";
    } else {
      // Display error message if credentials are incorrect
      document.getElementById("message").textContent = "Invalid username or password";
    }
  });
  