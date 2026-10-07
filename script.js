// =====================================================
// PROJECT DATA
// =====================================================

const projectData = {

    payroll: {

        label: "PROJECT_01 // SCHOOL PROJECT",

        title: "Payroll System",

        description:
            "A payroll management system designed to organize employee information, calculate salaries, and manage payroll records.",

        purpose:
            "Practice building a simple system for handling employee and payroll information.",

        learned:
            "Web page structure, styling, JavaScript logic, forms, and organizing application information.",

        tech:
            "HTML / CSS / JavaScript",

        status:
            "Completed school project",

        note:
            "This project helped me understand how different parts of a small application can work together to manage information."
    },


    records: {

        label: "PROJECT_02 // SCHOOL PROJECT",

        title: "Student Records System",

        description:
            "A database-focused system designed to organize and manage student information.",

        purpose:
            "Practice working with structured information and database-related application logic.",

        learned:
            "PHP fundamentals, MySQL concepts, HTML forms, and managing records.",

        tech:
            "PHP / MySQL / HTML",

        status:
            "Completed school project",

        note:
            "This project gave me experience connecting programming concepts with database management and record organization."
    }

};


// =====================================================
// PROJECT MODAL
// =====================================================

function openProject(projectName) {

    const project =
        projectData[projectName];

    if (!project) {
        return;
    }


    document.getElementById("modalLabel")
        .textContent =
        project.label;


    document.getElementById("modalTitle")
        .textContent =
        project.title;


    document.getElementById("modalDescription")
        .textContent =
        project.description;


    document.getElementById("modalPurpose")
        .textContent =
        project.purpose;


    document.getElementById("modalLearned")
        .textContent =
        project.learned;


    document.getElementById("modalTech")
        .textContent =
        project.tech;


    document.getElementById("modalStatus")
        .textContent =
        project.status;


    document.getElementById("modalNote")
        .textContent =
        project.note;


    document.getElementById("projectModal")
        .classList.add("active");


    document.body.style.overflow =
        "hidden";
}



function closeProject() {

    document.getElementById("projectModal")
        .classList.remove("active");


    document.body.style.overflow =
        "";
}



document
    .getElementById("projectModal")
    .addEventListener(
        "click",
        function (event) {

            if (
                event.target ===
                this
            ) {

                closeProject();
            }

        }
    );



document.addEventListener(
    "keydown",
    function (event) {

        if (
            event.key === "Escape"
        ) {

            closeProject();
        }

    }
);


// =====================================================
// SEARCH LAB
// =====================================================

function runSearch() {

    const input =
        document.getElementById(
            "searchNumber"
        );


    const number =
        Number(input.value);


    const linearResult =
        document.getElementById(
            "linearResult"
        );


    const binaryResult =
        document.getElementById(
            "binaryResult"
        );


    const searchLog =
        document.getElementById(
            "searchLog"
        );


    const numberElements =
        document.querySelectorAll(
            "#numberList span"
        );


    // CLEAR PREVIOUS HIGHLIGHTS

    numberElements.forEach(
        function (element) {

            element.classList.remove(
                "active-number"
            );

        }
    );


    // VALIDATION

    if (
        number < 1 ||
        number > 8 ||
        !Number.isInteger(number)
    ) {

        linearResult.textContent =
            "INVALID";

        binaryResult.textContent =
            "INVALID";

        searchLog.textContent =
            "SYSTEM: Enter a whole number from 1 to 8.";

        return;
    }


    // =================================================
    // LINEAR SEARCH
    // =================================================

    let linearSteps = 0;

    let linearFound = false;


    for (
        let i = 0;
        i < 8;
        i++
    ) {

        linearSteps++;


        if (
            i + 1 === number
        ) {

            linearFound = true;

            break;
        }

    }


    // =================================================
    // BINARY SEARCH
    // =================================================

    let start = 1;

    let end = 8;

    let binarySteps = 0;

    let binaryFound = false;


    while (
        start <= end
    ) {

        binarySteps++;


        const middle =
            Math.floor(
                (start + end) / 2
            );


        if (
            middle === number
        ) {

            binaryFound = true;

            break;
        }


        if (
            middle < number
        ) {

            start =
                middle + 1;

        } else {

            end =
                middle - 1;
        }

    }


    // =================================================
    // RESULTS
    // =================================================

    linearResult.textContent =
        linearFound
            ? "FOUND IN " + linearSteps + " STEP(S)"
            : "NOT FOUND";


    binaryResult.textContent =
        binaryFound
            ? "FOUND IN " + binarySteps + " STEP(S)"
            : "NOT FOUND";


    // HIGHLIGHT TARGET

    numberElements.forEach(
        function (element) {

            if (
                Number(element.textContent) ===
                number
            ) {

                element.classList.add(
                    "active-number"
                );

            }

        }
    );


    // LOG

    searchLog.innerHTML =
        "TARGET: " + number +
        "<br>" +
        "LINEAR SEARCH: " +
        linearSteps +
        " comparison(s)" +
        "<br>" +
        "BINARY SEARCH: " +
        binarySteps +
        " comparison(s)";
}


// =====================================================
// CHATBOT
// =====================================================

function addMessage(
    text,
    sender
) {

    const chatMessages =
        document.getElementById(
            "chatMessages"
        );


    if (!chatMessages) {

        console.error(
            "chatMessages element was not found."
        );

        return;
    }


    const message =
        document.createElement(
            "div"
        );


    message.classList.add(
        "message"
    );


    if (
        sender === "user"
    ) {

        message.classList.add(
            "user-message"
        );

    } else {

        message.classList.add(
            "bot-message"
        );

    }


    message.textContent =
        text;


    chatMessages.appendChild(
        message
    );


    chatMessages.scrollTop =
        chatMessages.scrollHeight;
}



function getBotResponse(
    question
) {

    const q =
        question
            .toLowerCase()
            .trim();


    // ABOUT

    if (
        q.includes("who are you") ||
        q.includes("about you") ||
        q.includes("your name") ||
        q.includes("who is ashton")
    ) {

        return (
            "[PROFILE] Ashton Kniel T. Casillano " +
            "is a Computer Science student currently " +
            "developing his programming, web development, " +
            "database, and software development skills."
        );
    }


    // SKILLS

    if (
        q.includes("skill") ||
        q.includes("technology") ||
        q.includes("technologies") ||
        q.includes("tech stack")
    ) {

        return (
            "[ATTRIBUTES] Current technologies include " +
            "HTML, CSS, JavaScript, PHP, MySQL, and Python."
        );
    }


    // PROJECTS

    if (
        q.includes("project") ||
        q.includes("projects") ||
        q.includes("built") ||
        q.includes("work")
    ) {

        return (
            "[PROJECT RECORDS] Current projects include " +
            "a Payroll System and a Student Records System."
        );
    }


    // PAYROLL

    if (
        q.includes("payroll") ||
        q.includes("salary")
    ) {

        return (
            "[PROJECT_01] The Payroll System is a school " +
            "project for managing employee information, " +
            "salary calculations, and payroll records."
        );
    }


    // STUDENT RECORDS

    if (
        q.includes("student records") ||
        q.includes("records system")
    ) {

        return (
            "[PROJECT_02] The Student Records System is a " +
            "school project focused on organizing student " +
            "information using PHP, MySQL, and HTML."
        );
    }


    // LEARNING

    if (
        q.includes("learning") ||
        q.includes("currently learning") ||
        q.includes("what are you learning")
    ) {

        return (
            "[DEVELOPMENT LOG] Currently practicing " +
            "programming, web development, databases, " +
            "software development, and problem-solving."
        );
    }


    // EDUCATION

    if (
        q.includes("education") ||
        q.includes("school") ||
        q.includes("study") ||
        q.includes("student")
    ) {

        return (
            "[EDUCATION] Currently studying Computer Science " +
            "with a focus on programming, databases, " +
            "web development, and software development."
        );
    }


    // SEARCH ALGORITHMS

    if (
        q.includes("search") ||
        q.includes("binary") ||
        q.includes("linear")
    ) {

        return (
            "[LAB] Ashton has been practicing linear and " +
            "binary search algorithms. The portfolio also " +
            "contains an interactive search demonstration."
        );
    }


    // HIRING / OPPORTUNITY

    if (
        q.includes("hire") ||
        q.includes("job") ||
        q.includes("opportunity")
    ) {

        return (
            "[STATUS] Ashton is currently a Computer Science " +
            "student developing his skills through school " +
            "projects, practice, and personal projects."
        );
    }


    // CONTACT

    if (
        q.includes("email") ||
        q.includes("contact") ||
        q.includes("reach")
    ) {

        return (
            "[CONTACT] trivinolebron@gmail.com"
        );
    }


    // DEFAULT

    return (
        "[SYSTEM] Information unavailable. Try asking " +
        "about projects, skills, learning, education, " +
        "search algorithms, or contact information."
    );
}



function sendMessage() {

    const input =
        document.getElementById(
            "userInput"
        );


    if (!input) {
        return;
    }


    const question =
        input.value.trim();


    if (
        question === ""
    ) {

        return;
    }


    addMessage(
        question,
        "user"
    );


    input.value =
        "";


    setTimeout(
        function () {

            const response =
                getBotResponse(
                    question
                );


            addMessage(
                response,
                "bot"
            );

        },
        400
    );
}



function askQuestion(
    question
) {

    const input =
        document.getElementById(
            "userInput"
        );


    if (!input) {
        return;
    }


    input.value =
        question;


    sendMessage();
}



function handleEnter(
    event
) {

    if (
        event.key === "Enter"
    ) {

        event.preventDefault();

        sendMessage();
    }
}


// =====================================================
// MOBILE MENU
// =====================================================

const menuToggle =
    document.getElementById(
        "menuToggle"
    );


const navLinks =
    document.getElementById(
        "navLinks"
    );


if (
    menuToggle &&
    navLinks
) {

    menuToggle.addEventListener(
        "click",
        function () {

            navLinks.classList.toggle(
                "active"
            );

        }
    );


    navLinks
        .querySelectorAll("a")
        .forEach(
            function (link) {

                link.addEventListener(
                    "click",
                    function () {

                        navLinks.classList.remove(
                            "active"
                        );

                    }
                );

            }
        );
}


// =====================================================
// THEME TOGGLE
// =====================================================

const themeToggle =
    document.getElementById(
        "themeToggle"
    );


if (themeToggle) {

    themeToggle.addEventListener(
        "click",
        function () {

            document.body.classList.toggle(
                "light-mode"
            );


            if (
                document.body.classList.contains(
                    "light-mode"
                )
            ) {

                localStorage.setItem(
                    "theme",
                    "light"
                );

                themeToggle.textContent =
                    "🌙";

            } else {

                localStorage.setItem(
                    "theme",
                    "dark"
                );

                themeToggle.textContent =
                    "☀️";
            }

        }
    );


    if (
        localStorage.getItem(
            "theme"
        ) === "light"
    ) {

        document.body.classList.add(
            "light-mode"
        );

        themeToggle.textContent =
            "🌙";
    }
}


// =====================================================
// CONTACT FORM
// =====================================================

const contactForm =
    document.getElementById(
        "contactForm"
    );


if (contactForm) {

    contactForm.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();


            const name =
                document.getElementById(
                    "name"
                ).value.trim();


            const email =
                document.getElementById(
                    "email"
                ).value.trim();


            const message =
                document.getElementById(
                    "message"
                ).value.trim();


            if (
                name === "" ||
                email === "" ||
                message === ""
            ) {

                alert(
                    "SYSTEM MESSAGE: " +
                    "Please complete all fields."
                );

                return;
            }


            const subject =
                encodeURIComponent(
                    "Portfolio Contact from " +
                    name
                );


            const body =
                encodeURIComponent(
                    "Name: " +
                    name +
                    "\n\nEmail: " +
                    email +
                    "\n\nMessage:\n" +
                    message
                );


            window.location.href =
                "mailto:trivinolebron@gmail.com" +
                "?subject=" +
                subject +
                "&body=" +
                body;

        }
    );
}


// =====================================================
// COMING SOON
// =====================================================

function comingSoon(event) {

    if (event) {

        event.preventDefault();
    }


    alert(
        "SYSTEM MESSAGE: " +
        "This profile link has not been connected yet."
    );
}