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
