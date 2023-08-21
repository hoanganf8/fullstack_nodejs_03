//Trước khi thao tác với các thẻ HTML: Tạo được Element

//DOM Element: Tạo Element (Object) từ các thẻ HTML có sẵn

// console.log(document);

/**
 * 1. document.getElementById(id)
 * - Truy xuất vào thẻ HTML thông qua id
 * - Chỉ truy xuất được thẻ đầu tiên
 *
 * 2. document.getElementsByClassName(class)
 * - Truy xuất vào thẻ HTML thông qua class
 * - Trả về 1 danh sách (HTMLCollection)
 * - Muốn tương tác => Cần lặp để truy cập tới từng element
 *
 * 3. document.getElementsByTagName(tag)
 * - Truy xuất tới thẻ html thông qua tên thẻ html
 * - Trả về 1 danh sách (HTMLCollection)
 * - Muốn tương tác => Cần lặp để truy cập tới từng element
 *
 * 4. document.querySelector(selector)
 * - Truy xuất tới 1 thẻ html thông qua css selector
 * - Chỉ truy xuất được thẻ đầu tiên
 *
 * 5. document.querySelectorAll(selector)
 * - Truy xuất tới tất cả các thẻ html có cùng selector đã khai báo
 * - Trả về 1 danh sách (NodeList)
 * - Muốn tương tác => Cần lặp để truy cập tới từng element
 *
 */

//getElementById()
// var title = document.getElementById("title");
// console.log([title]);

//getElementsByClassName()
// var titleList = document.getElementsByClassName("title");
// for (var i = 0; i < titleList.length; i++) {
//   console.log(titleList[i]);
// }

//getElementsByTagName()
// var titleList = document.getElementsByTagName("h1");
// for (var i = 0; i < titleList.length; i++) {
//   console.log(titleList[i]);
// }

//querySelector()
// var title = document.querySelector(".title");
// console.log(title);

//querySelectorAll()

// var titleList = document.querySelectorAll(".title");
// titleList.forEach(function (title) {
//   console.log(title);
// });

//document.body
//body.head

// var contentHeading = document.querySelector(".content .heading");
// console.log(contentHeading);

// var elementHeading = document.querySelector(".element .heading");
// console.log(elementHeading);

// var contentHeading = document.querySelector(".content .heading");
// console.log(contentHeading);

// var contentText = document.querySelector(".content .text");
// console.log(contentText);

var content = document.querySelector(".content");

var heading = content.querySelector(".heading");
console.log(heading);
var text = content.querySelector(".text");
console.log(text);
