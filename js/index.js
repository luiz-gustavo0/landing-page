const containerHeader = document.querySelector(".header-container");
const menu = document.querySelector(".menu");
const button = document.querySelector(".btn-mobile");

console.log(containerHeader, menu, button);

button.addEventListener("click", handleClick);

function handleClick() {
  button.classList.toggle("active");
  containerHeader.classList.toggle("active");
  menu.classList.toggle("active");
}

const tabs = document.querySelectorAll(".navigate-tabs .tabs li");
const sections = document.querySelectorAll(".tab-content");

tabs.forEach((tab) => {
  tab.addEventListener("click", (event) => {
    event.preventDefault();
    remmoveActiveTab();
    addActiveTab(tab);
  });
});

const remmoveActiveTab = () => {
  tabs.forEach((tab) => {
    tab.classList.remove("is-active");
  });

  sections.forEach((section) => {
    section.classList.remove("is-active");
  });
};

const addActiveTab = (tab) => {
  tab.classList.add("is-active");
  const href = tab.querySelector("a").getAttribute("href");

  const matchingSection = document.querySelector(href);
  matchingSection.classList.add("is-active");
};

// Acordion list

const accordionList = document.querySelectorAll(".faq-list dt");

console.log(accordionList);

function toogleAccordion(list) {
  list.classList.toggle("active");
  list.nextElementSibling.classList.toggle("active");
}

function accordionEvent() {
  accordionList.forEach((item) => {
    item.addEventListener("click", () => toogleAccordion(item));
  });
}

toogleAccordion(accordionList[0]);
accordionEvent();

// form

function validarEmail(email) {
  const regx = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regx.test(email);
}

const form = document.querySelector("form");

form.addEventListener("change", ({ target }) => {
  if (!validarEmail(target.value) || target.value === "") {
    target.classList.add("invalid");
    target.nextElementSibling.classList.add("invalid");
    target.setCustomValidity("Whoops, make sure it's an email");
    target.nextElementSibling.innerText = target.validationMessage;
  } else {
    target.classList.remove("invalid");
    target.nextElementSibling.classList.remove("invalid");
    target.setCustomValidity("");
  }
});
