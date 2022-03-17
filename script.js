"use strict";
// DOM ELEMENTS
const switchBtn = document.querySelector(".switch--input");
const headerImg = document.querySelector(".header-img");
const btnLeft = document.querySelector(".btn-left");
const btnRight = document.querySelector(".btn-right");
const slides = document.querySelectorAll(".slide");
const dotsContainer = document.querySelector(".dots");

// **************************************/
// --------------DARK MODE--------------
//***************************************/

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

// **************************************/
// ----------------SLIDER----------------
//***************************************/

let currentSlide = 0;

// SLIDER CREATION
//Adding transform to slides to get them in the initial position
const displaySlides = function () {
  slides.forEach((slide, i) => {
    slide.setAttribute("style", `transform: translateX(${101 * i}%)`);
  });
};
displaySlides();
// Slides initial postion 0 , 100% , 200%

// Creating the dots
const createDots = function () {
  slides.forEach((_, i) =>
    dotsContainer.insertAdjacentHTML(
      "beforeend",
      `<button class="dots-dot" data-slide=${i}></button>`
    )
  );
};
createDots();

//SLIDER FUNCTIONALITY
// takes a slide number and switches to it
const goToSlide = function (slideNumber) {
  slides.forEach((slide, i) => {
    slide.style.transform = `translateX(${101 * i - slideNumber * 101}%)`;
  });
  activateDot(slideNumber);
};

// activates the current slide dot
const activateDot = function (slideNumber) {
  document
    .querySelectorAll(".dots-dot")
    .forEach((dot) => dot.classList.remove("dots-dot-active"));
  document
    .querySelector(`.dots-dot[data-slide='${slideNumber}']`)
    .classList.add("dots-dot-active");
};
activateDot(0);

function nextSlide() {
  // Check current slide if it's the last
  if (currentSlide === slides.length - 1) currentSlide = 0;
  else currentSlide++;
  goToSlide(currentSlide);
}
// after first click 0 -> A(-100) , 100 -> B(0) , 200 -> C(100)

function previousSlide() {
  if (currentSlide === 0) currentSlide = slides.length - 1;
  else currentSlide--;
  goToSlide(currentSlide);
}
// after first click (after the first Slide ) click -100 -> A(0) , 0 -> B(100) , 100 -> C(200)

btnRight.addEventListener("click", nextSlide);
btnLeft.addEventListener("click", previousSlide);
dotsContainer.addEventListener("click", function (e) {
  const target = e.target;
  if (!target.classList.contains("dots-dot")) return;
  goToSlide(target.dataset.slide);
});
