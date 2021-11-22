const arrowRight = document.querySelector(".arrow-right");
const arrowLeft = document.querySelector(".arrow-left");
const cards = document.querySelector(".cards");

const scrolling = function () {
  cards.scrollBy({
    top: 0,
    left: this,
    behavior: "smooth",
  });
};
arrowRight.addEventListener("click", scrolling.bind(1000));
arrowLeft.addEventListener("click", scrolling.bind(-1000));
