var link = document.querySelector(".link");
console.log(link);

//Thuộc tính
/*
Khi làm việc với JS => Có 2 loại thuộc tính

1. Thuộc tính có sẵn của thẻ html

2. Thuộc tính tự tạo (Data Attribute)
*/

//Thuộc tính có sẵn

//Lấy giá trị thuộc tính: element.tenthuoctinh
// console.log(link.href);
// console.log(link.id);
// console.log(link.target);
// console.log(link.title);
// //Riêng thuộc tính class: element.className
// console.log(link.className);

//Cập nhật giá trị thuộc tính:
//element.tenthuoctinh = giatri

link.href = "https://google.com";
link.title = "Trang chủ Google";
link.target = "_self";
link.id = "abc";

//Giá trị mặc định của 1 thuộc tính sẽ là chuỗi rỗng
// console.log(link.rel);

//Thuộc tính tự tạo (data attribute)

//Lấy data attribute
// console.log(link.getAttribute("data-count"));
// console.log(link.dataset.count); //data-count
// console.log(link.dataset.indexNumber); //data-index-number

//Thêm data atrribute
// link.setAttribute("data-count", 10);
link.dataset.count = 20;
link.dataset.indexNumber = "ahihi";
link.dataset.animationDuration = "2s";

var content = document.querySelector(".content");
// content.className = content.className + " abc";
// console.log(content.classList);

//Thêm class mới
content.classList.add("abc", "ahihi");

//Xóa class
content.classList.remove("ahihi");

//Kiểm tra class tồn tại
console.log(content.classList.contains("abc"));

//Class toggle => Thêm class nếu không tồn tại, xóa class nếu tồn tại
content.classList.toggle("element");
content.classList.toggle("element");

//Xóa element
content.remove();

//Xóa thuộc tính
link.removeAttribute("title");
