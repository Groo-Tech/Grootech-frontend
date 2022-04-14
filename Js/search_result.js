const user_button = document.querySelector(".user");
const user_action = document.querySelector(".actions");

const closeUserAction = function () {
  user_action.classList.toggle("active");
};

user_button.addEventListener("click", closeUserAction);

const mobileForm = document.querySelector(".mobile-header__form");
const mobileEditBox = document.querySelector(".edit");
const mobileEditCloseBtn = document.querySelector(
  ".mobile-header__link--close"
);

mobileEditCloseBtn.addEventListener("click", function (e) {
  mobileEditBox.classList.add("edit--hidden");
});

mobileForm.addEventListener("click", function (e) {
  mobileEditBox.classList.remove("edit--hidden");
});

const mobileViewBtn = document.querySelector(".mobile__view-open");
const mobileView = document.querySelector(".mobile__view");
const mobileMapButton = document.querySelector(".map__button");

mobileViewBtn.addEventListener("click", function (e) {
  mobileView.classList.add("max");
  mobileViewBtn.style.display = "none";
});

mobileMapButton.addEventListener("click", function (e) {
  mobileView.classList.remove("max");
  mobileViewBtn.style.display = "block";
});
