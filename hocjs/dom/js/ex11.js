//Dom Navigation

// Chọn thành phần cha
// - parentElement => Trả về Element Node
// - parentNode => Trả về Node => Học sau

// Chọn thành phần con
//- children => Trả về 1 danh sách các phần con trực tiếp

// Chọn thành phần liền trước

// Chọn thành phần liền sau

// var btn = document.querySelector(".btn");
// console.log(btn);
// console.log(btn.parentElement);
// console.log(btn.parentElement.parentElement);

var removeBtnList = document.querySelectorAll(".todos .remove");
removeBtnList.forEach(function (removeBtn) {
  removeBtn.addEventListener("click", function () {
    this.parentElement.remove();
  });
});

var menu = document.querySelector(".menu");
// var menuList = menu.querySelectorAll("li");
// var menuList = menu.children;
// console.log(menuList[0].innerText);
// console.log(menu.children[1].children[1].children[0].innerText);

var itemList = menu.querySelectorAll("li");
itemList.forEach(function (item) {
  var children = item.children;
  if (children.length === 2) {
    item.classList.add("has-children");
  }
});
