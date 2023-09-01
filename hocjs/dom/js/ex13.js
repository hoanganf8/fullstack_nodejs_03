//Check All / Uncheck All

var checkAll = document.querySelector(".check-all");
var checkItems = document.querySelectorAll(".check-item");

checkAll.addEventListener("change", function () {
  var checkAllStatus = this.checked;
  checkItems.forEach(function (checkItem) {
    checkItem.checked = checkAllStatus;
  });
});

checkItems.forEach(function (checkItem) {
  checkItem.addEventListener("change", function () {
    if (!this.checked) {
      checkAll.checked = false;
      return;
    }

    //Kiểm tra xem tất cả checkbox có được check hay không?
    var status = Array.from(checkItems).every(function (item) {
      return item.checked;
    });
    checkAll.checked = status;
  });
});
