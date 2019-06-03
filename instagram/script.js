var modal = document.querySelector(".modal");
var trigger = document.querySelector(".trigger");
var closeButton = document.querySelector(".btn-close");

function toggleModal() {
  //   console.log(modal.classList);
  modal.classList.toggle("show-modal");
  // modal이 show-modal 클래스를 가지고 있지 않으면 DOMTokenList에 추가하고
  // 가지고 있다면 삭제한다.
}

function windowOnClick(event) {
  console.log(event);
  console.log(event.target);
  if (event.target === modal) {
    toggleModal();
  }
  // 이벤트가 발생했을 때
  // modal이 켜져있다면 함수 실행
}

trigger.addEventListener("click", toggleModal);
closeButton.addEventListener("click", toggleModal);
window.addEventListener("click", windowOnClick);
