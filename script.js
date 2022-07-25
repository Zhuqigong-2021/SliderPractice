"use strict";
const slider = function () {
  const leftbtn = document.querySelector(".slide-left-btn");
  const rightbtn = document.querySelector(".slide-right-btn");
  const images = document.querySelectorAll("img");
  const dotContainer = document.querySelector(".dots");

  let curSlide = 0;
  const maxSlide = images.length;
  // function moveLeft() {
  //   image1.style.transform = "translateX(-100%)";
  //   image2.style.transform = "translateX(0)";
  //   image3.style.transform = "translateX(100%)";
  // }
  console.log(rightbtn);
  // leftbtn.addEventListener("click", moveLeft);
  const goToSlide = function (slide) {
    images.forEach((s, i) => {
      s.style.transform = `translateX(${100 * (i - slide)}%)`;
      console.log(`${100 * (i - slide)}%`);
    });
    //i = 0 ,1,2 slide = 0,1,2
  };
  const nextSlide = function () {
    if (curSlide === maxSlide - 1) {
      curSlide = 0;
    } else {
      curSlide++;
    }
    // curSlide++;
    // console.log(curSlide);
    goToSlide(curSlide);
    activateDOt(curSlide);
  };
  const preSlide = function () {
    if (curSlide === 0) {
      curSlide = maxSlide - 1;
    } else {
      curSlide--;
    }

    goToSlide(curSlide);
    activateDOt(curSlide);
  };
  rightbtn.addEventListener("click", nextSlide);
  leftbtn.addEventListener("click", preSlide);

  window.addEventListener("keydown", (e) => {
    console.log(e.key);
    if (e.key === "ArrowRight") {
      nextSlide();
    }
    if (e.key === "ArrowLeft") {
      preSlide();
    }
  });
  const createDots = function () {
    images.forEach(function (_, i) {
      dotContainer.insertAdjacentHTML(
        "beforeend",
        `<button class="dots__dot" data-slide="${i}"></button>`
      );
    });
  };
  const activateDOt = function (slide) {
    document
      .querySelectorAll(".dots__dot")
      .forEach((dot) => dot.classList.remove("dots__dot--active"));
    document
      .querySelector(`.dots__dot[data-slide="${slide}"]`)
      .classList.add("dots__dot--active");
  };
  //using event delegation to enhance the performance
  dotContainer.addEventListener("click", (e) => {
    if (e.target.classList.contains("dots__dot")) {
      const { slide } = e.target.dataset;
      goToSlide(slide);
      activateDOt(slide);
    }
  });

  const init = function () {
    goToSlide(0);
    createDots();
    activateDOt(0);
  };
  init();
};
slider();
