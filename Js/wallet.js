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
