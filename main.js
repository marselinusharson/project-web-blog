const body = document.querySelector("body");
const nav = document.querySelector("nav");
const modeToggle = document.querySelector(".dark-light");
const searchToggle = document.querySelector(".searchToggle");
const sidebarClose = document.querySelector(".sidebarClose");
const sidebarOpen = document.querySelector(".sidebarOpen");

//mode gelap dan mode terang
modeToggle.addEventListener("click", () => {
  modeToggle.classList.toggle("active");
  body.classList.toggle("dark");
});
//toggle search box
searchToggle.addEventListener("click", () => {
  searchToggle.classList.toggle("active");
});

//sidebar modeToggle
sidebarOpen.addEventListener("click", () => {
  nav.classList.add("active");
});
sidebarClose.addEventListener("click", (e) => {
  let clickedElm = e.target;
  if (!clickedElm.classList.contains("sidebarOpen") && !clickedElm.classList.contains("menu")) {
    nav.classList.remove("active");
  }
});
