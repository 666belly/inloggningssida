// Hårdkodade värden för användarnamn och lösenord
const correctUsername = "test";
const correctPassword = "1234";

// Testar om användaren redan är inloggad med localStorage funktion
document.addEventListener("DOMContentLoaded", function () {
  if (localStorage.getItem("isLoggedIn") === "true") {
    showWelcomeMessage(); // Om användaren redan är inloggad
  } else {
    showLoginForm(); // Om användaren inte är inloggad
  }
});

// Testar om värdena correctUsername och correctPassword stämmer, om true loggas användaren in,
// om false får användaren ett felmeddelande
function login() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  if (username === correctUsername && password === correctPassword) {
    localStorage.setItem("isLoggedIn", "true");
    showWelcomeMessage();
  } else {
    showErrorMessage();
  }
}

// Visar välkomstmeddelande vid lyckad inloggning
function showWelcomeMessage() {
  document.getElementById("loginForm").style.display = "none";
  document.getElementById("errorMessage").style.display = "none";
  document.getElementById("welcomeMessage").style.display = "block";
}

// Visar felmeddelande vid misslyckad inloggning
function showErrorMessage() {
  document.getElementById("loginForm").style.display = "block";
  document.getElementById("errorMessage").style.display = "block";
  document.getElementById("welcomeMessage").style.display = "none";
}

// Funktion för att visa inloggningsformuläret igen vid t.ex. utloggning eller fel värden
function showLoginForm() {
  document.getElementById("loginForm").style.display = "block";
  document.getElementById("errorMessage").style.display = "none";
  document.getElementById("welcomeMessage").style.display = "none";
}

// Funktione för när användaren loggar ut
function logout() {
  // "Rensar" localStorage samt fälten i formuläret
  localStorage.removeItem("isLoggedIn");
  showLoginForm();
  document.getElementById("username").value = "";
  document.getElementById("password").value = "";
}

showLoginForm();
