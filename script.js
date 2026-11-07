
document.addEventListener("DOMContentLoaded", function () {

    // Navigation links
    const navLinks = document.querySelectorAll(".nav-links a");

    navLinks.forEach(function (link) {
        link.addEventListener("click", function (event) {
            const target = link.getAttribute("href");

            if (target === "#") {
                event.preventDefault();
            }
        });
    });

    // Contact button
    const contactBtn = document.querySelector(".contact-btn");

    contactBtn.addEventListener("click", function () {
        const email = "your.email@example.com";
        window.location.href = "mailto:" + email;
    });

    // View Portfolio button
    const portfolioBtn = document.getElementById("portfolio-btn");

    portfolioBtn.addEventListener("click", function () {
        const skillsSection = document.querySelector(".skills");

        skillsSection.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    });

    // Skill card hover effects
    const skillCards = document.querySelectorAll(".skill-card");

    skillCards.forEach(function (card) {

        card.addEventListener("mouseenter", function () {
            card.style.transform = "translateY(-8px)";
            card.style.boxShadow = "0 10px 20px rgba(0,0,0,0.15)";
            card.style.transition = "0.3s ease";
        });

        card.addEventListener("mouseleave", function () {
            card.style.transform = "translateY(0)";
            card.style.boxShadow = "none";
        });

    });

});
