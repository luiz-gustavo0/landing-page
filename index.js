const containerHeader = document.querySelector(".container-header");
const menu = document.querySelector(".menu");
const list = document.querySelector(".list");
const button = document.querySelector(".btn-menu");

button.addEventListener("click", handleClick);

function handleClick() {
  button.classList.toggle("active");
  containerHeader.classList.toggle("active");
  menu.classList.toggle("active");
  list.classList.toggle("active");
}
