"use strict";
// DOM ELEMENTS
const switchBtn = document.querySelector(".switch--input");
const headerImg = document.querySelector(".header-img");

const darkMode = function (e) {
  if (e.target.checked) {
    document.documentElement.setAttribute("data-mode", "dark");
    headerImg.src = `https://images.unsplash.com/photo-1518894781321-630e638d0742?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80`;
  }

  if (!e.target.checked) {
    document.documentElement.setAttribute("data-mode", "light");
    headerImg.src = `https://images.unsplash.com/photo-1491553895911-0055eca6402d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80`;
  }
};
switchBtn.addEventListener("change", darkMode);
