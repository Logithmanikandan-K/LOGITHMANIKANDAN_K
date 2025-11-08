window.addEventListener("load", function() {
    alert("Welcome to Logith Manikandan K's Portfolio!");
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        target.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    });
});

const sections = document.querySelectorAll("section, div[id]");
const navLinks = document.querySelectorAll(".demo li a");

window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= sectionTop - 60) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }
    });
});

const skillImages = document.querySelectorAll(".move");
skillImages.forEach(img => {
    img.addEventListener("mouseover", () => {
        img.style.transform = "scale(1.1)";
        img.style.transition = "0.3s";
    });
    img.addEventListener("mouseout", () => {
        img.style.transform = "scale(1)";
    });
});

const icons = document.querySelectorAll(".insta");
icons.forEach(icon => {
    icon.addEventListener("click", () => {
        alert("This would open the social media link!");
    });
});
