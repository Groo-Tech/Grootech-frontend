const user_button = document.querySelector(".user");
const user_action = document.querySelector(".actions");

const closeUserAction = function () {
  console.log("yo");
  user_action.classList.toggle("active");
};

user_button.addEventListener("click", closeUserAction);
