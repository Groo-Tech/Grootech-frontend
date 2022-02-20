const slideContainer = document.querySelector(".features__wrapper");
let mouseDown = false;
let startX, scrollLeft;

const popularContainer = document.querySelector(".popular__wrapper");
let plansmouseDown = false;
let plansStartX, plansScrollLeft;

const startDragging = function (event) {
  mouseDown = true;
  startX = event.pageX - slideContainer.offsetLeft;
  scrollLeft = slideContainer.scrollLeft;
};

const stopDragging = function () {
  mouseDown = false;
};

const startDraggingList = function (event) {
  plansmouseDown = true;
  plansStartX = event.pageX - popularContainer.offsetLeft;
  plansScrollLeft = popularContainer.scrollLeft;
};

const stopDraggingList = function () {
  plansmouseDown = false;
};

slideContainer.addEventListener("mousemove", function (e) {
  e.preventDefault();
  if (!mouseDown) return;
  const x = e.pageX - slideContainer.offsetLeft;
  const scroll = x - startX;
  slideContainer.scrollLeft = scrollLeft - scroll;
});

popularContainer.addEventListener("mousemove", function (e) {
  e.preventDefault();
  if (!plansmouseDown) return;
  const x = e.pageX - popularContainer.offsetLeft;
  const scroll = x - plansStartX;
  popularContainer.scrollLeft = plansScrollLeft - scroll;
});

slideContainer.addEventListener("mousedown", startDragging, false);
slideContainer.addEventListener("mouseup", stopDragging, false);
slideContainer.addEventListener("mouseleave", stopDragging, false);

popularContainer.addEventListener("mousedown", startDraggingList, false);
popularContainer.addEventListener("mouseup", stopDraggingList, false);
popularContainer.addEventListener("mouseleave", stopDraggingList, false);
