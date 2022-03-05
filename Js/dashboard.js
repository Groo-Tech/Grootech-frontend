const menuBtn = document.querySelector(".nav__details");
const menu = document.querySelector(".actions");

menuBtn.addEventListener("click", function (e) {
  menu.classList.toggle("actions--hidden");
});
