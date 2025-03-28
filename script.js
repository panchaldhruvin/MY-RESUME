document.addEventListener("DOMContentLoaded", function () {
    const profilePic = document.querySelector(".profile-pic");
    profilePic.addEventListener("mouseover", function () {
        this.style.transform = "scale(1.1) rotate(5deg)";
        this.style.transition = "transform 0.3s ease-in-out";
    });
    profilePic.addEventListener("mouseout", function () {
        this.style.transform = "scale(1) rotate(0deg)";
    });

    const sections = document.querySelectorAll("section");
    sections.forEach((section, index) => {
        section.style.opacity = "0";
        section.style.transform = "translateY(30px)";
        setTimeout(() => {
            section.style.transition = "opacity 0.8s ease-in-out, transform 0.8s ease-in-out";
            section.style.opacity = "1";
            section.style.transform = "translateY(0)";
        }, index * 400);
    });

    const header = document.querySelector("header");
    header.style.opacity = "0";
    header.style.transform = "scale(0.8)";
    setTimeout(() => {
        header.style.transition = "opacity 1s ease-in-out, transform 1s ease-in-out";
        header.style.opacity = "1";
        header.style.transform = "scale(1)";
    }, 500);
});
