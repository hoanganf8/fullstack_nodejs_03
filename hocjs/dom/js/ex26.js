//Trigger Event
/*
click()
submit()

-> Tự kích hoạt 1 event mà không cần tác động của người dùng
*/

// var btn = document.querySelector(".btn");
// btn.addEventListener("click", function () {
//   console.log("Click me");
// });

// setInterval(function () {
//   btn.click();
// }, 1000);

var quantityInput = document.querySelector(".quantity input");
var minusBtn = quantityInput.previousElementSibling;
var plusBtn = quantityInput.nextElementSibling;

var changeEvent = new Event("change");

quantityInput.addEventListener("change", function () {
  console.log(this.value);
});

minusBtn.addEventListener("click", function () {
  quantityInput.value--;

  if (quantityInput.value < 1) {
    quantityInput.value = 1;
  }

  quantityInput.dispatchEvent(changeEvent);
});

plusBtn.addEventListener("click", function () {
  quantityInput.value++;
  quantityInput.dispatchEvent(changeEvent);
});

var province = document.querySelector(".province");
var provinceId;

//Xử lý khi load trang
// var optionSelected = province.options[province.selectedIndex];
// provinceId = optionSelected.value;
// console.log(provinceId);

province.addEventListener("change", function () {
  provinceId = this.value;
  console.log(provinceId);
});

var selectChangeEvent = new Event("change");
province.dispatchEvent(selectChangeEvent);
