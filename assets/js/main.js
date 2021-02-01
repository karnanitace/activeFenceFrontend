const header = document.querySelector(".header");
const showLogo = document.querySelector(".alt-logo");
const mainLogo = document.querySelector(".main-logo");
const closeBtn = document.querySelector(".close-btn");
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
const whitepaperForm = document.getElementById("whitepaperForm");
// const solutionDropLg = document.querySelector('.solution-dropdown');
// const resourceDropLg = document.querySelector('.resource-dropdown');
const solutionDropIcon = document.querySelector(
  ".mobile-nav-solution .drop-icon"
);
const resourceDropIcon = document.querySelector(
  ".mobile-nav-resource .drop-icon"
);
const cookieDiv = document.getElementById("cookie");
const cookieBtn = document.querySelector(".cookies-btn");
const threeDots = document.querySelectorAll(".three-dots");
const showText = document.querySelectorAll(".show-text");
const showBtn = document.querySelectorAll(".show-btn");
const searchBtn  = document.querySelector(".search-btn");
const searchBox = document.querySelector(".open-search-box");
const scrollToTopBtn= document.getElementById("scrollToTop");
const rootElement = document.documentElement;

// functions
function sticky() {
  mainLogo.classList.toggle("hide-logo", window.scrollY > 0);
  showLogo.classList.toggle("show-logo", window.scrollY > 0);
  header.classList.toggle("sticky-head", window.scrollY > 0);
  aboutMenuToggle !== (undefined || null) &&
    aboutMenuToggle.classList.toggle("color-white", window.scrollY > 0);
  scrollToTopBtn !== (undefined || null) && scrollToTopBtn.classList.toggle("show-scroll", window.scrollY > 100);
}

function toggleNav(e) {
  mobileNav.classList.toggle("active");
}

function showDrop() {
  solutionDrop.classList.toggle("show-menu");
  solutionDropIcon.classList.toggle("rotate-drop");
}
function showDropRes() {
  resourceDrop.classList.toggle("show-menu");
  resourceDropIcon.classList.toggle("rotate-drop");
}

function showSuccess(e) {
  e.preventDefault();
  const workEmail = document.getElementById("workEmail");
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (workEmail.value !== "" && re.test(workEmail.value.trim())) {
    bannerSuccess.classList.toggle("d-none");
    bannerEmail.classList.toggle("d-none");
  }
}

function hideCookies() {
  cookieDiv.classList.toggle("hide-cookie");
}

function showTruncateText() {
  threeDots.forEach((dots) => {
    dots.classList.toggle("d-none");
  });
  showText.forEach((text) => {
    text.classList.toggle("d-inline");
  });
  showBtn.forEach((btn) => {
    btn.innerHTML === "Read more"
      ? (btn.innerHTML = "Read less")
      : (btn.innerHTML = "Read more");
  });
}

function openSearchBox() {
  searchBox.classList.toggle("open-box");
  searchBtn.innerHTML !== "close" ? searchBtn.innerHTML = "close" : searchBtn.innerHTML = `<img src="./assets/images/Search.png">Search`;
}


// handle scroll
function scrollToTop() {
  rootElement.scrollTo({
    top: 0,
    behavior: "smooth"
  })
}
// event listeners
window.addEventListener("scroll", sticky);
menuBtn.onclick = toggleNav;
closeBtn.onclick = toggleNav;
solutionLink.onclick = showDrop;
resourceLink.onclick = showDropRes;
whitepaperForm !== (undefined || null) &&
  (whitepaperForm.onsubmit = showSuccess);
// solutionDropLg.onclick = rotateIcon;
cookieBtn !== (undefined || null) && (cookieBtn.onclick = hideCookies);

// swiper js

showBtn !== (undefined || null) &&
  showBtn.forEach((btn) => {
    btn.onclick = showTruncateText;
  });

  searchBtn !== (undefined || null) && (searchBtn.onclick = openSearchBox);

  
scrollToTopBtn !== (undefined || null) && (scrollToTopBtn.onclick = scrollToTop);