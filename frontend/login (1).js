function forceLogin() {
  const username = document.getElementById("login-username").value;
  const password = document.getElementById("login-password").value;

  fetch("http://localhost:3000/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ username, password })
  })
    .then(res => res.json())
    .then(data => {
      if (data.success) {
        localStorage.setItem("loggedIn", "true");
        window.location.href = "Dashboard.html";
      } else {
        alert("Invalid login credentials");
      }
    });
}

function fakeRegister() {
  const username = document.getElementById("reg-username").value;
  const password = document.getElementById("reg-password").value;

  fetch("http://localhost:3000/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ username, password })
  })
    .then(res => res.json())
    .then(() => {
      alert("Registration successful");
      switchToLogin();
    });
}
function switchToRegister() {
  document.getElementById("login-form").style.display = "none";
  document.getElementById("register-form").style.display = "block";
  document.getElementById("form-title").innerText = "Register";
}

function switchToLogin() {
  document.getElementById("register-form").style.display = "none";
  document.getElementById("login-form").style.display = "block";
  document.getElementById("form-title").innerText = "Login";
}


