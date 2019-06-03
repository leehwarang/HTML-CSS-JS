var modal = document.querySelector(".modal");
var trigger = document.querySelector(".trigger");
var closeButton = document.querySelector(".btn-close");

var header_wrap = document.querySelector(".header-wrap");
var header = document.querySelector(".header");
var second_logo = document.querySelector(".second-logo");

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

  if (ypos > 100) {
    header_wrap.classList.add("short-header-wrap");
    header.classList.add("short-header");
    second_logo.classList.add("hide-second-logo");
  } else {
    header_wrap.classList.remove("short-header-wrap");
    header.classList.remove("short-header");
    second_logo.classList.remove("hide-second-logo");
  }
}

trigger.addEventListener("click", toggleModal);
closeButton.addEventListener("click", toggleModal);
window.addEventListener("click", windowOnClick);
window.addEventListener("scroll", Scroll);
