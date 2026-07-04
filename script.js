
function hamburger(){
document.getElementById("options").classList.toggle("show");
};
function profile(){
document.getElementById("profile-options").classList.toggle("show");
};
/*$(document).ready(function(){
  $("#hamburger").click(function(){
    $("#options").show();
  });
});*/
function openCourse(courseName) {
    localStorage.setItem("course", courseName);
    window.location.href = "course-details.html";
};
window.onload = function () {
    const course = localStorage.getItem("course");

const img = document.getElementById("courseimage");
   
    if (document.getElementById("courseTitle")) {

        if (course === "html-fundamental") {
          img.src = "Src/html2.png";
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
'<a href="learning.html"><button onclick="showLearning()">Start Learning</button></a>';
}
        else if (course === "css") {
          img.src = "Src/css.png";
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
'<a href="learning.html"><button onclick="showLearning()">Start Learning</button></a';
        }
        else if (course === "java-script") {
          img.src = "Src/js.png";
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
'<a href="learning.html"><button onclick="showLearning()">Start Learning</button></a';
        }

        else if (course === "Java Programming") {
          img.src = "Src/java2.png";
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
'<a href="learning.html"><button onclick="showLearning()">Start Learning</button></a';
        }

        else if (course === "Python Programming") {
          img.src="Src/python3.jpg";
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
'<a href="learning.html"><button onclick="showLearning()">Start Learning</button></a';
}
}
};
const video = document.getElementById("courseVideo");

if(course === "html-fundamental"){
    video.src = "videos/html.mp4";
}

else if(course === "css"){
    video.src = "videos/css.mp4";
}

else if(course === "java-script"){
    video.src = "videos/javascript.mp4";
}

else if(course === "Python Programming"){
    video.src = "videos/python.mp4";
}

else if(course === "Java Programming"){
    video.src = "videos/java.mp4";
}
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
};
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