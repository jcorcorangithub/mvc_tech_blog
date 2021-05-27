const loginForm = document.getElementsByClassName("login-form")[0];

loginForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const username = document.getElementById("email-login").value;
  const password = document.getElementById("password-login").value;
  fetch("/api/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username, password }),
  })
    .then((response) => response.json())
    .then((res) => console.log(res))
    .catch((err) => console.error(err.response));
});
