const modalBtn = document.querySelectorAll("[data-modal]");
const modalClose = document.querySelectorAll(".modal__close");
const modal = document.querySelectorAll(".modal");
console.log(modal);
/* querySelectorAll собирает в массив элементы по указанному селектору*/
const body = document.body;

modalBtn.forEach((item) => {
  item.addEventListener("click", (event) => {
    let $this = event.currentTarget;
    let modalId = $this.getAttribute("data-modal");
    let modal = document.getElementById(modalId);
    let modalContent = modal.querySelector(".modal__content");
    modalContent.addEventListener("click", (event) => {
      event.stopPropagation();
    });
    modal.classList.add("show");
    body.classList.add("no-scroll");
  });
});

modalClose.forEach((item) => {
  item.addEventListener("click", (event) => {
    let currentModal = event.currentTarget.closest(".modal");
    closeModal(currentModal);
  });
});

modal.forEach((item) => {
  item.addEventListener("click", (event) => {
    let currentModal = event.currentTarget;
    closeModal(currentModal);
  });
});

function closeModal(currentModal) {
  currentModal.classList.remove("show");
  body.classList.remove("no-scroll");
}
