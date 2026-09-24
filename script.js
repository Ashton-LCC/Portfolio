// =========================
// CHATBOT
// =========================

function addMessage(text, sender) {
    const chatMessages = document.getElementById("chatMessages");

    if (!chatMessages) {
        console.error("chatMessages element was not found.");
        return;
    }

    const message = document.createElement("div");

    message.classList.add("message");

    if (sender === "user") {
        message.classList.add("user-message");
    } else {
        message.classList.add("bot-message");
    }

    message.textContent = text;

    chatMessages.appendChild(message);

    chatMessages.scrollTop = chatMessages.scrollHeight;
}


function getBotResponse(question) {
    const q = question.toLowerCase();

    if (
        q.includes("who are you") ||
        q.includes("about you") ||
        q.includes("your name")
    ) {
        return "[SYSTEM] You have encountered Ashton Kniel T. Casillano. A Computer Science student currently progressing through the scenario.";
    }

    if (
        q.includes("skill") ||
        q.includes("technolog")
    ) {
        return "[ATTRIBUTE] PHP, JavaScript, MySQL, HTML, Python, and CSS have been acquired.";
    }

    if (
        q.includes("project") ||
        q.includes("work")
    ) {
        return "[SCENARIO RECORD] Cosmic Task Manager and Student Records System have been completed.";
    }

    if (
        q.includes("education") ||
        q.includes("study") ||
        q.includes("school")
    ) {
        return "[CHARACTER INFORMATION] Currently studying Computer Science with a focus on programming, databases, web development, and software development.";
    }

    if (
        q.includes("achievement") ||
        q.includes("achievements")
    ) {
        return "[SYSTEM MESSAGE] No major achievement has been registered yet. The character is still progressing through the scenario.";
    }

    if (
        q.includes("email") ||
        q.includes("contact")
    ) {
        return "[CONTACT INFORMATION] trivinolebron@gmail.com";
    }

    return "[SYSTEM] Information unavailable. Try asking about skills, projects, education, or contact information.";
}


function sendMessage() {
    const input = document.getElementById("userInput");

    if (!input) {
        console.error("userInput element was not found.");
        return;
    }

    const question = input.value.trim();

    if (question === "") {
        return;
    }

    addMessage(question, "user");

    input.value = "";

    setTimeout(function () {
        const response = getBotResponse(question);
        addMessage(response, "bot");
    }, 400);
}


function askQuestion(question) {
    const input = document.getElementById("userInput");

    if (!input) {
        console.error("userInput element was not found.");
        return;
    }

    input.value = question;

    sendMessage();
}


function handleEnter(event) {
    if (event.key === "Enter") {
        sendMessage();
    }
}


// =========================
// MOBILE MENU
// =========================

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", function () {
        navLinks.classList.toggle("active");
    });

    navLinks.querySelectorAll("a").forEach(function (link) {
        link.addEventListener("click", function () {
            navLinks.classList.remove("active");
        });
    });
}


// =========================
// THEME TOGGLE
// =========================

const themeToggle = document.getElementById("themeToggle");

if (themeToggle) {
    themeToggle.addEventListener("click", function () {
        document.body.classList.toggle("light-mode");

        if (document.body.classList.contains("light-mode")) {
            localStorage.setItem("theme", "light");
            themeToggle.textContent = "🌙";
        } else {
            localStorage.setItem("theme", "dark");
            themeToggle.textContent = "☀️";
        }
    });

    if (localStorage.getItem("theme") === "light") {
        document.body.classList.add("light-mode");
        themeToggle.textContent = "🌙";
    }
}


// =========================
// CONTACT FORM
// =========================

const contactForm = document.getElementById("contactForm");

if (contactForm) {
    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();

        alert("SYSTEM MESSAGE: Your message has been transmitted successfully.");

        contactForm.reset();
    });
}


// =========================
// SOCIAL LINKS
// =========================

function comingSoon(event) {
    if (event) {
        event.preventDefault();
    }

    alert("SYSTEM MESSAGE: This connection is not available yet.");
}