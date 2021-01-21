const header = document.querySelector(".header");
const showLogo = document.querySelector(".alt-logo");
const mainLogo = document.querySelector(".main-logo");
const closeBtn= document.querySelector(".close-btn");
const menuBtn = document.querySelector(".menu-toggle");
const mobileNav = document.getElementById("mobile-nav");
const solutionLink = document.querySelector(".mobile-nav-solution");
const resourceLink = document.querySelector(".mobile-nav-resource");
const solutionDrop = document.querySelector(".mobile-nav-solution ul");
const resourceDrop = document.querySelector(".mobile-nav-resource ul");
const aboutMenuToggle = document.querySelector(".hero-section .menu-toggle i");
const whitepaperBtn = document.querySelector(".email-banner-btn");
const bannerSuccess = document.querySelector(".banner-form-success");
const bannerEmail = document.querySelector(".banner-email-form");
// const solutionDropLg = document.querySelector('.solution-dropdown');
// const resourceDropLg = document.querySelector('.resource-dropdown');
const solutionDropIcon = document.querySelector('.mobile-nav-solution .drop-icon');
const resourceDropIcon = document.querySelector('.mobile-nav-resource .drop-icon');



// functions
function sticky() {
    mainLogo.classList.toggle("hide-logo", window.scrollY > 0);
    showLogo.classList.toggle("show-logo", window.scrollY > 0);
    header.classList.toggle("sticky-head", window.scrollY > 0);
    aboutMenuToggle.classList.toggle("color-white", window.scrollY > 0);
    
}

function toggleNav(e) {
    mobileNav.classList.toggle("active");
    
}

function showDrop() {
    solutionDrop.classList.toggle("show-menu");
    solutionDropIcon.classList.toggle('rotate-drop');
}
function showDropRes() {
    resourceDrop.classList.toggle("show-menu");
    resourceDropIcon.classList.toggle('rotate-drop');
}

function showSuccess() {
    bannerSuccess.classList.toggle("d-none");
    bannerEmail.classList.toggle("d-none");
}

// function rotateIcon(){
//     solutionDropIcon.classList.toggle('rotate-drop');
// }




// event listeners
window.addEventListener("scroll", sticky);
menuBtn.onclick = toggleNav;
closeBtn.onclick = toggleNav;
solutionLink.onclick = showDrop;
resourceLink.onclick = showDropRes;
whitepaperBtn.onclick = showSuccess;
// solutionDropLg.onclick = rotateIcon;


// swiper js

