const tabContainer = document.querySelector(".account__wrapper");
const tabsButton = document.querySelectorAll(".account__button");
const tabsContent = document.querySelectorAll(".account__content");
const body = document.querySelector("body");

tabContainer.addEventListener("click", function (e) {
  let id = e.target.dataset.category;
  if (!id) return;

  tabsButton.forEach((tabBtn) => {
    tabBtn.classList.remove("account__button--active");
  });

  e.target.classList.add("account__button--active");

  tabsContent.forEach((tabContent) => {
    tabContent.classList.remove("account__content--active");
  });

  const contentElement = document.querySelector(`#${id}`);
  contentElement.classList.add("account__content--active");
});

const notificationBtn = document.querySelector(".header--notification");
const notificationBox = document.querySelector(".notification");

notificationBtn.addEventListener("click", function (e) {
  notificationBox.classList.toggle("notification--hidden");
});

const slideContainer = document.querySelector(".dashboard__wrapper");
let mouseDown = false;
let startX, scrollLeft;

const startDragging = function (event) {
  mouseDown = true;
  startX = event.pageX - slideContainer.offsetLeft;
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

("use strict");

const slider = document.querySelector(".tips__wrapper");
const sliderImages = document.querySelectorAll(".card--tips");

//buttons
const prevBtn = document.querySelector(".icon__prev");
const nextBtn = document.querySelector(".icon__next");

//state

let counter = 0;

const size = sliderImages[0].clientWidth;

slider.style.transform = `translateX(${-size * counter}px )`;

//listeners

const next = function () {
  if (counter >= sliderImages.length - 1) return;
  slider.style.transition = "transform 0.2s ease-in-out";
  counter++;
  slider.style.transform = `translateX(${-size * counter}px )`;
};

const previous = function () {
  if (counter <= 0) return;
  slider.style.transition = "transform 0.2s ease-in-out";
  counter--;
  slider.style.transform = `translateX(${-size * counter}px )`;
};

nextBtn.addEventListener("click", next);
prevBtn.addEventListener("click", previous);

slider.addEventListener("transitionend", () => {
  if (sliderImages[counter].id === "lastClone") {
    counter = sliderImages.length - 2;
    slider.style.transform = `translateX(${-size * counter}px )`;
    slider.style.transition = "none";
  }
  if (sliderImages[counter].id === "firstClone") {
    slider.style.transition = "none";
    counter = sliderImages.length - counter;
    slider.style.transform = `translateX(0)`;
    slider.style.transition = "none";
  }
});
