document.getElementById("loginForm").addEventListener("submit", function(e) {
  e.preventDefault();
  
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();
  const message = document.getElementById("message");

  // Dummy login (change to backend API or validation logic)
  if (username === "admin" && password === "d5buildmart") {
    message.style.color = "green";
    message.textContent = "Login successful! Redirecting...";
    setTimeout(() => {
      window.location.href = "dashboard.html"; // Change as needed
    }, 1500);
  } else {
    message.style.color = "red";
    message.textContent = "Invalid username or password.";
  }
});
