// res ponsive nav bar section start 
const navbar = document.getElementById("navbar");
const navbarToggle = navbar.querySelector(".navbar-toggle");

function openMobileNavbar() {
navbar.classList.add("opened");
navbarToggle.setAttribute("aria-expanded", "true");
}

function closeMobileNavbar() {
navbar.classList.remove("opened");
navbarToggle.setAttribute("aria-expanded", "false");
}

navbarToggle.addEventListener("click", () => {
if (navbar.classList.contains("opened")) {
    closeMobileNavbar();
} else {
    openMobileNavbar();
}
});

const navbarMenu = navbar.querySelector("#navbar-menu");
const navbarLinksContainer = navbar.querySelector(".navbar-links");

navbarLinksContainer.addEventListener("click", (clickEvent) => {
clickEvent.stopPropagation();
});

navbarMenu.addEventListener("click", closeMobileNavbar);

window.onscroll = () => {
    navbarToggle.classList.remove('.navbar-toggle');
    navbar.classList.remove('opened');
};


// res ponsive nav bar section ends here 


// scroll section menu hover and active link start
 
// const header = document.querySelector('header');
// window.addEventListener('scroll', function() {
//     header.classList.toggle('sticky', window.scrollY > 100);
// });
