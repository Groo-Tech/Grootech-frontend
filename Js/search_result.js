const user_button = document.querySelector(".user");
const user_action = document.querySelector(".actions");

const closeUserAction = function () {
  user_action.classList.toggle("active");
};

user_button.addEventListener("click", closeUserAction);

const mobileForm = document.querySelector(".mobile-header__form");

mobileForm.addEventListener("submit", function (e) {
  e.preventDefault();
});

const mobileViewBtn = document.querySelector(".mobile__view-open");
const mobileView = document.querySelector(".mobile__view");
const mobileMapButton = document.querySelector(".map__button");

mobileViewBtn.addEventListener("click", function (e) {
  mobileView.style.setProperty("--view__height", "100vh");
  mobileViewBtn.style.display = "none";
});

mobileMapButton.addEventListener("click", function (e) {
  mobileView.style.setProperty("--view__height", "150px");
  mobileViewBtn.style.display = "block";
});
