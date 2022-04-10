const slideContainer = document.querySelector(".wallet__container");
let mouseDown = false;
let startX, scrollLeft;

const startDragging = function (e) {
  mouseDown = true;
  startX = e.pageX - slideContainer.offsetLeft;
  scrollLeft = slideContainer.scrollLeft;
};

const stopDragging = function () {
  mouseDown = false;
};

slideContainer.addEventListener("mousemove", function (e) {
  e.preventDefault();
  if (!mouseDown) return;
  const x = e.pageX - slideContainer.offsetLeft;
  const scroll = x - startX;
  slideContainer.scrollLeft = scrollLeft - scroll;
});

slideContainer.addEventListener("mousedown", startDragging, false);
slideContainer.addEventListener("mouseup", stopDragging, false);
slideContainer.addEventListener("mouseleave", stopDragging, false);

//toggle password to text on add wallet modal

const lockBtn = document.querySelector(".form__lock--toggle");
const unlockBtn = document.querySelector(".form__unlock");
const passwordInput = document.querySelector(".form__password");

console.log(passwordInput);

lockBtn.addEventListener("click", function (e) {
  unlockBtn.classList.remove("form__unlock--hidden");
  lockBtn.classList.add("form__lock--hidden");
  passwordInput.type = "text";
});

unlockBtn.addEventListener("click", function (e) {
  unlockBtn.classList.add("form__unlock--hidden");
  lockBtn.classList.remove("form__lock--hidden");
  passwordInput.type = "password";
});
