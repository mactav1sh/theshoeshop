"use strict";
// DOM ELEMENTS
const switchBtn = document.querySelector(".switch--input");
const headerImg = document.querySelector(".header-img");
const btnLeft = document.querySelector(".btn-left");
const btnRight = document.querySelector(".btn-right");
const slides = document.querySelectorAll(".slide");

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

// CAROUSEL

let currentSlide = 1;
//adding transform to slides
const displaySlides = function () {
  slides.forEach((slide, i) => {
    slide.setAttribute("style", `transform: translateX(${101 * i}%)`);
  });
};
// 0 , 100% , 200%
displaySlides();

function nextSlide() {
  // Check current slide if it's the last
  if (currentSlide === slides.length) currentSlide = 0; // this will restart the slider to the first slide by making the transforms 0,200,100
  // cur slide = 1 -> 0,100,200 -> -100, 0, 100
  slides.forEach((slide, i) => {
    slide.style.transform = `translateX(${101 * i - currentSlide * 101}%)`;
  });
  currentSlide++;
}
// after first click 0 -> A(-100) , 100 -> B(0) , 200 -> C(100)

function previousSlide() {
  // cur slide = 2
  if (currentSlide === 1) currentSlide = slides.length + 1; // this will restart the slider to the end slide by making the transforms -200,-100,0
  currentSlide--; // cur slide = 1

  slides.forEach((slide, i) => {
    slide.style.transform = `translateX(${
      101 * (i + 1) - currentSlide * 101
    }%)`; // 0
  });
}
// after first (after the first Slide click) click -100 -> A(0) , 0 -> B(100) , 100 -> C(200)

btnRight.addEventListener("click", nextSlide);
btnLeft.addEventListener("click", previousSlide);
