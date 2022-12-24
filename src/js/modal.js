const modalBtn = document.querySelectorAll("[data-modal]");
/* querySelectorAll собирает в массив элементы по указанному селектору*/

modalBtn.forEach((item) => {
  item.addEventListener("click", (event) => {
    let $this = event.currentTarget;
    let modalId = $this.getAttribute("data-modal");
    let modal = document.getElementById(modalId);
    modal.classList.add("show");
  });
});
