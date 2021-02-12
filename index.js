// const containerHeader = document.querySelector(".container-header");
// const menu = document.querySelector(".menu");
// const list = document.querySelector(".list");
// const button = document.querySelector(".btn-menu");

// button.addEventListener("click", handleClick);

// function handleClick() {
//   button.classList.toggle("active");
//   containerHeader.classList.toggle("active");
//   menu.classList.toggle("active");
//   list.classList.toggle("active");
// }

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
