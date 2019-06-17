var modal = document.querySelector(".modal");
var viewmoreImg = document.querySelector(".view-more-img");
var closeButton = document.querySelector(".btn-close");

var header_wrap = document.querySelector(".header-wrap");
var header = document.querySelector(".header");
var textLogo = document.querySelector(".logo-text");

function toggleModal() {
  modal.classList.toggle("show-modal");
}

function windowOnClick(event) {
  console.log(event);
  console.log(event.target);
  if (event.target === modal) {
    toggleModal();
  }
}

function Scroll() {
  var ypos = window.pageYOffset;

  if (ypos > 50) {
    header_wrap.classList.add("short-header-wrap");
    header.classList.add("short-header");
    textLogo.classList.add("hide-second-logo");
  } else {
    header_wrap.classList.remove("short-header-wrap");
    header.classList.remove("short-header");
    textLogo.classList.remove("hide-second-logo");
  }
}

viewmoreImg.addEventListener("click", toggleModal);
closeButton.addEventListener("click", toggleModal);
window.addEventListener("click", windowOnClick);
window.addEventListener("scroll", Scroll);

class Carousel {
  constructor(targetTag) {
    this.carousel = document.querySelector(`.${targetTag}`);
    this.carouselImg = this.carousel.querySelector(".upload-img");
    this.prevBtn = document.querySelector(".prev");
    this.nextBtn = document.querySelector(".next");
    this.currentPointer = this.carousel.offsetLeft;
  }

  setCarouselLeftPosition(direction) {
    this.currentPointer += direction * this.carouselImg.offsetWidth;
    this.carousel.style.left = `${this.currentPointer}px`;
  }

  attachEventToBtn(btnTag) {
    btnTag.addEventListener("click", () => {
      if (btnTag.classList.contains("prev")) {
        this.setCarouselLeftPosition(1);
      } else if (btnTag.classList.contains("next")) {
        this.setCarouselLeftPosition(-1);
      }
    });
  }

  init() {
    this.attachEventToBtn(this.prevBtn);
    this.attachEventToBtn(this.nextBtn);
  }
}

const mycarousel = new Carousel("carousel");
mycarousel.init();
