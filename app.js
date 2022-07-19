const navToggle = document.querySelector(".nav-toggle");
const navBar = document.querySelector(".nav-container");
const navToggleClick = () => navBar.classList.toggle('toggle');
navToggle.addEventListener('click', navToggleClick);
