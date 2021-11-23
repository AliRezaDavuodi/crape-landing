const arrowRight = document.querySelector(".arrow-right");
const arrowLeft = document.querySelector(".arrow-left");
const cards = document.querySelector(".cards");
const cardsWidth = cards.getBoundingClientRect().width;

const scrolling = function () {
  cards.scrollBy({
    left: this,
    behavior: "smooth",
  });
};
arrowRight.addEventListener("click", scrolling.bind(cardsWidth));
arrowLeft.addEventListener("click", scrolling.bind(-cardsWidth));
