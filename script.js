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