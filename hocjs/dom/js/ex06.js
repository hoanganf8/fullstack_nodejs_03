var btn = document.querySelector(".btn");
var modalBox = document.querySelector(".modal-box");
var closeModalBtn = modalBox.querySelector(".close");
var modalOverlay = modalBox.querySelector(".overlay");

btn.addEventListener("click", function () {
  modalBox.classList.add("show");
});

closeModalBtn.addEventListener("click", function () {
  modalBox.classList.remove("show");
});

modalOverlay.addEventListener("click", function () {
  modalBox.classList.remove("show");
});
