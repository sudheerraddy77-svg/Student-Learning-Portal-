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
    window.location.replace("index.html");
} else {
    alert("Invalid credentials");
}
};
function logout() {
    localStorage.removeItem("currentUser");
    window.location.replace("login.html");
};
//----------------Hamburger-----
function hamburger(){
document.getElementById("options").classList.toggle("show");
};
//---------Profile-Ham--------
function profile(){
document.getElementById("profile-options").classList.toggle("show");
};
//----------------Course Cards
function openCourse(courseName) {
    localStorage.setItem("course", courseName);
    loadCourse(courseName);

    document.getElementById("course-details").scrollIntoView({
        behavior: "smooth"
    });
}
function loadCourse(course) {

const img = document.getElementById("courseimage");
   
    if (document.getElementById("courseTitle")) {

        if (course === "html-fundamental") {
          img.src = "html1.png";
            document.getElementById("courseTitle").innerHTML = "HTML Fundamental";
            document.getElementById("description").innerHTML =
                "Learn the fundamentals of HTML and build the structure of web pages. This course covers HTML elements, forms, tables, semantic tags, and multimedia. By the end of the course, you will be able to create responsive and well-structured web pages.";
                document.getElementById("what-you-learn").innerHTML = `
    <li>CSS Selectors</li>
    <li>Colors & Fonts</li>
    <li>Flexbox</li>
    <li>Grid</li>
    <li>Responsive Design</li>`;
    document.getElementById("prerequisites").innerHTML = `
<li>Basic Computer Knowledge</li>
<li>Basic HTML Knowledge</li>
<li>No Prior Programming Experience Required</li>
`;
document.getElementById("button").innerHTML =
'<button onclick="showLearning()">Start Learning</button>';
}
        else if (course === "css") {
          img.src = "css1.png";
            document.getElementById("courseTitle").innerHTML = "🎨 CSS Mastery ";
            document.getElementById("description").innerHTML =
                "Learn how to design attractive and responsive websites using CSS. This course covers colors, fonts, Flexbox, Grid, animations, and responsive layouts to create modern web pages.";
                document.getElementById("what-you-learn").innerHTML =`
 <li>CSS Selectors</li>
 <li>Colors & Fonts</li>
 <li>Flexbox</li>
 <li>Grid</li>
 <li>Responsive Design</li>`;
             document.getElementById("prerequisites").innerHTML = `
<li>Basic HTML Knowledge</li>
<li>Basic Computer Skills</li>
<li>VS Code or Any Code Editor</li>
`;
document.getElementById("button").innerHTML =
'<button onclick="showLearning()">Start Learning</button>';
        }
        else if (course === "java-script") {
          img.src = "JavaScript1.png";
            document.getElementById("courseTitle").innerHTML = "⚙️ JavaScript Essentials";
            document.getElementById("description").innerHTML =
                "Learn the basics of JavaScript and make websites interactive. This course covers variables, functions, loops, DOM manipulation, events, and simple projects to strengthen your programming skills.";
                document.getElementById("what-you-learn").innerHTML =` 
 <li>Variables</li>
 <li>Functions</li>
 <li>Loops</li>
 <li>DOM Manipulation</li>
 <li>Events</li>`;
            document.getElementById("prerequisites").innerHTML = `
<li>HTML Fundamentals</li>
<li>CSS Basics</li>
<li>Basic Logical Thinking</li>
`;
document.getElementById("button").innerHTML =
'<button onclick="showLearning()">Start Learning</button>';
        }

        else if (course === "Java Programming") {
          img.src = "Java1.png";
            document.getElementById("courseTitle").innerHTML = "Java Programming";
            document.getElementById("description").innerHTML =
                "Learn the fundamentals of Java programming and build a strong foundation in object-oriented programming. This course covers variables, loops, classes, objects, inheritance, exception handling, and file handling with practical examples and mini projects.";
                document.getElementById("what-you-learn").innerHTML =`
  <li>Variables</li>
  <li>OOP Concepts</li>
  <li>Inheritance</li>
  <li>Exception Handling</li>
  <li>Collections</li>`;
            document.getElementById("prerequisites").innerHTML = `
<li>Basic Computer Knowledge</li>
<li>Problem Solving Skills</li>
<li>No Prior Java Experience Required</li>
`;
document.getElementById("button").innerHTML =
'<button onclick="showLearning()">Start Learning</button>';
        }

        else if (course === "Python Programming") {
          img.src="Python1.jpg";
            document.getElementById("courseTitle").innerHTML = "Python Programming";
            document.getElementById("description").innerHTML =
                "Learn Python programming from the basics to build a strong programming foundation. This course includes variables, loops, functions, file handling, and problem-solving with practical examples.";
                document.getElementById("what-you-learn").innerHTML =`    
  <li>Variables</li>
 <li>Functions</li>
 <li>Loops</li>
 <li>File Handling</li>
 <li>Modules</li>`;
            document.getElementById("prerequisites").innerHTML = `
<li>Basic Computer Knowledge</li>
<li>Interest in Programming</li>
<li>No Coding Experience Required</li>
`;
document.getElementById("button").innerHTML =
'<button onclick="showLearning()">Start Learning</button>';
}
}
};


//--------learning-section------
function showLearning() {

    const course = localStorage.getItem("course");

    document.getElementById("learning-section").scrollIntoView({
        behavior: "smooth"
    });
    if(course === "html-fundamental"){

        document.getElementById("learnTitle").innerText =
        "📘 HTML Fundamentals";

        document.getElementById("lessonList").innerHTML = `
        <li><b>Lesson 1 : </b>Introduction to HTML</li>
        <li><b>Lesson 2 :</b> HTML Elements</li>
        <li><b>Lesson 3 :</b> Forms & Tables</li>
        <li><b>Lesson 4 :</b> Semantic HTML</li>
        `;
        document.getElementById('assignment').innerHTML='To create Registeration form';
document.getElementById('assignment-submit').innerHTML=`<a href="assignment.html"><button>assignment Submit</button></a>`;
    }
    else if(course === "css"){

        document.getElementById("learnTitle").innerText =
        "🎨 CSS Mastery";

        document.getElementById("lessonList").innerHTML = `
        <li><b>Lesson 1 :</b> Introduction to CSS</li>
        <li><b>Lesson 2 :</b> Selectors & Colors</li>
        <li><b>Lesson 3 :</b> Flexbox & Grid</li>
        <li><b>Lesson 4 :</b> Responsive Design</li>
        `;
        document.getElementById('assignment').innerHTML='Design a Responsive Web Page using CSS.';
        document.getElementById('assignment-submit').innerHTML=`<a href="assignment.html"><button>assignment Submit</button></a>`;

    }

    else if(course === "java-script"){

        document.getElementById("learnTitle").innerText =
        "⚙️ JavaScript Essentials";

        document.getElementById("lessonList").innerHTML = `
        <li><b>Lesson 1 :</b> Variables</li>
        <li><b>Lesson 2 :</b> Functions</li>
        <li><b>Lesson 3 :</b> DOM Manipulation</li>
        <li><b>Lesson 4 :</b> Events</li>
        `;
        document.getElementById('assignment').innerHTML='Build a Simple Calculator using JavaScript.';
        
        document.getElementById('assignment-submit').innerHTML=`<a href="assignment.html"><button>assignment Submit</button></a>`;
    }

        else if(course==="Python Programming"){
          document.getElementById("learnTitle").innerHTML="📘 Python";
          document.getElementById('lessonList').innerHTML=`<li><b>Lesson 1 :</b>Python Basics</li>
          <li><b>Lesson 2 :</b>Variables & Loops</li>
          <li><b>Lesson 3 :</b>Functions</li>
          <li><b>Lesson 4 :</b>File Handling</li>`;
          document.getElementById('assignment').innerHTML='Write a Student Marks Calculator in Python.';
document.getElementById('assignment-submit').innerHTML=`<a href="assignment.html"><button>assignment Submit</button></a>`;
        }
        else if(course==="Java Programming"){
          document.getElementById("learnTitle").innerHTML="📘 Java Programming";
          document.getElementById('lessonList').innerHTML=`
          <li><b>Lesson 1 :</b>Java Basics</li>
          <li><b>Lesson 2 :</b>Variables & Methods</li>
          <li><b>Lesson 3 :</b>Classes & Objects</li>
          <li><b>Lesson 4 :</b>Inheritance & Exception Handling</li>`;
          document.getElementById('assignment').innerHTML='Create a Student Management System in Java.';
document.getElementById('assignment-submit').innerHTML=`<a href="assignment.html"><button>assignment Submit</button></a>`;
}
const video = document.getElementById("courseVideo");

if(video){
    if(course === "html-fundamental"){
        video.src = "https://youtu.be/embed/TIRRNHfcjl8";
    }
    else if(course === "css"){
        video.src = "https://youtu.be/embed/Oi9QvyK8zvk";
    }
    else if(course === "java-script"){
        video.src = "https://youtu.be/embed/lfmg-EJ8gm4";
    }
    else if(course === "Python Programming"){
        video.src = "https://youtu.be/embed/UrsmFxEIp5k";
    }
    else if(course === "Java Programming"){
        video.src = "https://youtu.be/embed/xTtL8E4LzTQ";
    }
}
}
//--------Quizz-------
function checkQuiz() {
    let score = 0;

    // Get all selected radio buttons
    const answers = document.querySelectorAll('input[type="radio"]:checked');

    answers.forEach(answer => {
        score += Number(answer.value);
    });

    const total = 5;

    document.getElementById("result").innerHTML =
        `Result: ${score} / ${total}`;
};
function submit(){
  alert('Submit sucessfully');
};
// ---------- AUTO LOGIN CHECK ----------
if (
    !localStorage.getItem("currentUser") &&
    !window.location.pathname.includes("login.html") &&
    !window.location.pathname.includes("register.html")
) {
    window.location.replace("login.html");
}
