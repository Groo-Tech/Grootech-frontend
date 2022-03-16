const menuBtn = document.querySelector(".nav__details");
const menu = document.querySelector(".actions");

menuBtn.addEventListener("click", function (e) {
  menu.classList.toggle("actions--hidden");
});

const sectionHeader = document.querySelector(".section-dashboard");
const header = document.querySelector(".header--1");
const headerFixed = document.querySelector(".header--2");

const headerHeight = header.getBoundingClientRect().height;

const stickyNav = function (entries) {
  const [entry] = entries;
  console.log(entry);
  if (!entry.isIntersecting) {
    header.classList.add("header--hidden");
    headerFixed.classList.remove("header--hidden");
  } else {
    header.classList.remove("header--hidden");
    headerFixed.classList.add("header--hidden");
  }
};

const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0.5,
  rootMargin: `${headerHeight}px`,
});

headerObserver.observe(sectionHeader);
