document.getElementById("home-link").classList.add("active");
const links = document.querySelectorAll(".nav-icon");

links.forEach(link => {
    link.addEventListener("click", () => {
        links.forEach(link => link.classList.remove("active"));
        link.classList.add("active");
    });
});


const menuBtn = document.getElementById("menu-btn");
menuBtn.addEventListener("click", () => {
    const navIcon = document.getElementById("nav-icon-div");
    navIcon.classList.toggle("active-2");
});