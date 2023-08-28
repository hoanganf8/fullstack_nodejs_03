//Event Object

var btn = document.querySelector(".btn");
btn.addEventListener("mousedown", function (e) {
  //e = event object => Trả về thông tin của sự kiện
  //Mỗi sự kiện lại có thông tin khác nhau
  //   console.log("clicked");
  //   console.log(this);
  if (e.which === 1) {
    this.style.background = "red";
  }
});

var nameEl = document.querySelector(".name");
nameEl.addEventListener("keyup", function (e) {
  //   console.log(e);
  if (e.key === "Enter") {
    console.log(this.value);
  }
});

document.addEventListener("keyup", function (e) {
  console.log(e);
  //Giữ Ctrl + Enter => Chuyển cả trang thành màu đỏ
  //Enter => Khôi phục lại như ban đầu
  if (e.ctrlKey && e.key === "Enter") {
    document.body.style.background = "red";
  } else if (e.key === "Enter") {
    document.body.style.background = "initial";
  }
});
