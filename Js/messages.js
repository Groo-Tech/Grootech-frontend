const notificationBtn = document.querySelector(".header--notification");
const notificationBox = document.querySelector(".notification");

notificationBtn.addEventListener("click", function (e) {
  notificationBox.classList.toggle("notification--hidden");
});

const inboxMenuBtn = document.querySelector(".icon-menu");
const inboxMenu = document.querySelector(".message__sidebar");

inboxMenuBtn.addEventListener("click", function (e) {
  inboxMenu.classList.toggle("message__sidebar--hidden");
});

const archiveBtn = document.querySelectorAll(".icon-archive");
const modalBox = document.querySelector(".modal");
const modalOverlay = document.querySelector(".overlay");
const cancelModal = document.querySelectorAll(".modal__cancel");

archiveBtn.forEach((btn) => {
  btn.addEventListener("click", function (e) {
    modalBox.classList.remove("modal--hidden");
    modalOverlay.classList.remove("overlay--hidden");
  });
});

const closeModal = function (e) {
  modalBox.classList.add("modal--hidden");
  modalOverlay.classList.add("overlay--hidden");
};

cancelModal.forEach((btn) => {
  btn.addEventListener("click", closeModal);
});

modalOverlay.addEventListener("click", closeModal);
