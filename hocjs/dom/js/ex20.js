//Event: beforeunload

var handleBeforeUnload = function (e) {
  e.preventDefault();
  e.returnValue = "F8";
};

var loginForm = document.querySelector(".login-form");
loginForm.addEventListener("input", function (e) {
  if (e.target.defaultValue !== e.target.value) {
    //add event beforeunload
    window.addEventListener("beforeunload", handleBeforeUnload);
  } else {
    //remove event beforeunload
    window.removeEventListener("beforeunload", handleBeforeUnload);
  }
});

//Khi submit -> Chặn không cho chuyển trang -> Xóa event beforeunload -> re-submit (Thông qua hàm submit()

loginForm.addEventListener("submit", function (e) {
  e.preventDefault();
  window.removeEventListener("beforeunload", handleBeforeUnload);
  this.submit();
});
