// Header Scroll
let nav = document.querySelector(".navbar");
window.onscroll = function () {
  if (document.documentElement.scrollTop > 20) {
    nav.classList.add("header-scrolled");
  } else {
    nav.classList.remove("header-scrolled");
  }
};

// Nav hide
const navbar = document.querySelectorAll(".nav-link");
var navCollapse = document.querySelectorAll(".navbar-collapse.collapse");
navbar.forEach(function (a) {
  a.addEventListener("click", function () {
    console.log("hello");
    navCollapse[0].classList.remove("show");
  });
});
