
// ---------------- DEFAULT USERS ----------------
(function initializeDefaultUsers() {
let users = JSON.parse(localStorage.getItem("users")) || [];
const defaultUsers = [
{ username: "alice", password: "alice123" },
{ username: "bob", password: "bob123" },
{ username: "charlie", password: "charlie123" },
{ username: "david", password: "david123" },
{ username: "eve", password: "eve123" }
];
defaultUsers.forEach(defUser => {
if (!users.find(u => u.username === defUser.username)) {
users.push(defUser);
}
});
localStorage.setItem("users", JSON.stringify(users));
})();

// ---------------- LOGIN CHECK ----------------
function checkLogin() {
const user = localStorage.getItem("currentUser");
if (!user) {
alert("Please login first!");
window.location.href = "login.html";
return false;
}
return true;
}
// ---------------- DISPLAY USER ----------------
function displayUser() {
const user = localStorage.getItem("currentUser");
const welcome = document.getElementById("welcomeUser");
const loginLink = document.getElementById("loginLink");
const registerLink = document.getElementById("registerLink");
const logoutLink = document.getElementById("logoutLink");
if (user) {
if (welcome) welcome.innerText = "Welcome, " + user;
if (loginLink) loginLink.style.display = "none";
if (registerLink) registerLink.style.display = "none";
if (logoutLink) logoutLink.style.display = "inline";
} else {
if (welcome) welcome.innerText = "";
if (loginLink) loginLink.style.display = "inline";
if (registerLink) registerLink.style.display = "inline";
if (logoutLink) logoutLink.style.display = "none";
}
}
// ---------------- REGISTER ----------------
function register() {
let users = JSON.parse(localStorage.getItem("users")) || [];
const username = document.getElementById("regUsername").value;
const password = document.getElementById("regPassword").value;
if (!username || !password) {
alert("Fill all fields");
return;
}
if (users.find(u => u.username === username)) {
alert("User already exists");
return;
}
users.push({ username, password });
localStorage.setItem("users", JSON.stringify(users));
alert("Registration successful");
window.location.href = "login.html";
}
// ---------------- LOGIN ----------------
function login() {
let users = JSON.parse(localStorage.getItem("users")) || [];
const username = document.getElementById("username").value;
const password = document.getElementById("password").value;
const valid = users.find(u => u.username === username && u.password ===
password);
if (valid) {
localStorage.setItem("currentUser", username);
alert("Login successful");
window.location.href = "home.html";
} else {
alert("Invalid credentials");
}
};
