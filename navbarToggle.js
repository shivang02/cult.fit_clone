const closeButton = document.getElementsByClassName("navlink-close-mweb");
const openButton = document.getElementsByClassName("hamburger-menu");
const sideNavbar = document.getElementsByClassName("navlink-container-mweb");

closeButton[0].addEventListener("click", () => {
    sideNavbar[0].classList.toggle("active");
});

openButton[0].addEventListener("click", () => {
    sideNavbar[0].classList.toggle("active");
});

