const hamburgerMenu = document.querySelector("#hamburger-icon");
const offScreenMenu = document.querySelector(".off-screen-menu");
function toggleMobileMenu() {
    offScreenMenu.classList.toggle('open');
    hamburgerMenu.classList.toggle('open');
}
hamburgerMenu.addEventListener("click",toggleMobileMenu);


const darkmodeToggle = document.querySelector("#darkmode-toggle");
const body = document.querySelector("body");
let darkmode = localStorage.getItem('darkmode');

if (darkmode === "active") 
    {
        body.classList.add('darkmode');
        darkmodeToggle.checked = true;
    }
function toggleDarkMode() {
    body.classList.toggle('darkmode');
    darkmode = localStorage.getItem("darkmode");
    darkmode !== "active" ? localStorage.setItem("darkmode","active") : localStorage.setItem("darkmode",null);
}
darkmodeToggle.addEventListener("change",toggleDarkMode);