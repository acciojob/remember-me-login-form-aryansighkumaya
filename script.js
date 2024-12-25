//your JS code here. If required.
// On page load, check if there are saved login details
window.onload = function () {
  const savedUsername = localStorage.getItem("username");
  const savedPassword = localStorage.getItem("password");

  if (savedUsername && savedPassword) {
    document.getElementById("login-form").style.display = "none";
    document.getElementById("existing").style.display = "block";
  }
};

// Handle the submit button click
document.getElementById("submit").addEventListener("click", function () {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const rememberMe = document.getElementById("checkbox").checked;

  if (username && password) {
    if (rememberMe) {
      localStorage.setItem("username", username);
      localStorage.setItem("password", password);
    } else {
      localStorage.removeItem("username");
      localStorage.removeItem("password");
    }
    alert(`Logged in as ${username}`);
  } else {
    alert("Please fill in both username and password.");
  }
});

// Handle the "Login as existing user" button click
document.getElementById("login-existing").addEventListener("click", function () {
  const savedUsername = localStorage.getItem("username");
  alert(`Logged in as ${savedUsername}`);
});
