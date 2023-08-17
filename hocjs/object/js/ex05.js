Array.prototype.map2 = function (callback) {
  var array = this;
  var newArr = [];
  if (array.length) {
    for (var index = 0; index < array.length; index++) {
      var value = array[index];

      var result = callback(value, index);

      newArr[newArr.length] = result;
    }
  }

  return newArr;
};
var users = ["Item 1", "Item 2", "Item 3", "Item 4"];

var result = users.map2(function (user, index) {
  //   console.log(user, index);
  return `<h3>${index} - ${user}</h3>`;
});

console.log(result);

//Yêu cầu: Viết phương thức map2 có tác dụng giống map

var numbers = [1, 2, 3];
var result = numbers.map2(function (number) {
  return `<p>${number}</p>`;
});
console.log(result);
