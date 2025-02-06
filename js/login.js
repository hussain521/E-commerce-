const container = document.querySelector(".container-fluid");
const registerbtn = document.querySelector(".register-btn");
const loginbtn = document.querySelector(".login-btn");
const password = document.getElementById("password");
const passwordTwo = document.getElementById("password-two");
const passwordOne = document.getElementById("password-confrim");
const icon = document.getElementById("icon");
const eye = document.getElementById("eye");
const confrim = document.getElementById("confrim");

registerbtn.addEventListener("click", () => {
  container.classList.add("active");
});

loginbtn.addEventListener("click", () => {
  container.classList.remove("active");
});

icon.addEventListener("click", () => {
  if (password.type == "password") {
    password.type = "text";
    icon.setAttribute("class", "fa-solid fa-eye  ");
  } else {
    password.type = "password";
    icon.setAttribute("class", "fa-solid fa-eye-slash  ");
  }
});

eye.addEventListener("click", () => {
  if (passwordTwo.type == "password") {
    passwordTwo.type = "text";
    eye.setAttribute("class", "fa-solid fa-eye  ");
  } else {
    passwordTwo.type = "password";
    eye.setAttribute("class", "fa-solid fa-eye-slash  ");
  }
});
confrim.addEventListener("click", () => {
  if (passwordOne.type == "password") {
    passwordOne.type = "text";
    confrim.setAttribute("class", "fa-solid fa-eye  ");
  } else {
    passwordOne.type = "password";
    confrim.setAttribute("class", "fa-solid fa-eye-slash  ");
  }
});
