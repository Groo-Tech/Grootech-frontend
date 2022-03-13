// const slideContainer = document.querySelector(".features__wrapper");
// let mouseDown = false;
// let startX, scrollLeft;

// const popularContainer = document.querySelector(".popular__wrapper");
// let plansmouseDown = false;
// let plansStartX, plansScrollLeft;

// const startDragging = function (event) {
//   mouseDown = true;
//   startX = event.pageX - slideContainer.offsetLeft;
//   scrollLeft = slideContainer.scrollLeft;
// };

// const stopDragging = function () {
//   mouseDown = false;
// };

// const startDraggingList = function (event) {
//   plansmouseDown = true;
//   plansStartX = event.pageX - popularContainer.offsetLeft;
//   plansScrollLeft = popularContainer.scrollLeft;
// };

// const stopDraggingList = function () {
//   plansmouseDown = false;
// };

// slideContainer.addEventListener("mousemove", function (e) {
//   e.preventDefault();
//   if (!mouseDown) return;
//   const x = e.pageX - slideContainer.offsetLeft;
//   const scroll = x - startX;
//   slideContainer.scrollLeft = scrollLeft - scroll;
// });

// popularContainer.addEventListener("mousemove", function (e) {
//   e.preventDefault();
//   if (!plansmouseDown) return;
//   const x = e.pageX - popularContainer.offsetLeft;
//   const scroll = x - plansStartX;
//   popularContainer.scrollLeft = plansScrollLeft - scroll;
// });

// slideContainer.addEventListener("mousedown", startDragging, false);
// slideContainer.addEventListener("mouseup", stopDragging, false);
// slideContainer.addEventListener("mouseleave", stopDragging, false);

// popularContainer.addEventListener("mousedown", startDraggingList, false);
// popularContainer.addEventListener("mouseup", stopDraggingList, false);
// popularContainer.addEventListener("mouseleave", stopDraggingList, false);

// const links = Array.from(document.querySelectorAll("a"));

// console.log(links);

// links.forEach((link) => {
//   link.addEventListener("dragstart", (e) => {
//     e.preventDefault();
//   });

//   link.addEventListener("dragleave", (e) => {
//     e.preventDefault();
//   });

//   link.addEventListener("dragover", (e) => {
//     e.preventDefault();
//   });

//   link.addEventListener("dragend", (e) => {
//     e.preventDefault();
//   });

//   link.addEventListener("drag", (e) => {
//     e.preventDefault();
//   });
// });

const sectionHeader = document.querySelector(".drop");
const header = document.querySelector(".header--1");
const headerFixed = document.querySelector(".header--2");
const headerSearchBox = document.querySelector(".header__search-container");

const headerHeight = header.getBoundingClientRect().height;

const stickyNav = function (entries) {
  const [entry] = entries;
  console.log(entry);
  if (!entry.isIntersecting) {
    header.classList.add("header--hidden");
    headerFixed.classList.remove("header--hidden");
    headerSearchBox.classList.add("header__search-container--hidden");
  } else {
    header.classList.remove("header--hidden");
    headerFixed.classList.add("header--hidden");
    headerSearchBox.classList.remove("header__search-container--hidden");
  }
};

const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0.5,
  rootMargin: `${headerHeight}px`,
});

headerObserver.observe(sectionHeader);
