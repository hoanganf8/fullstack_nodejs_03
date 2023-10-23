//Cắt chuỗi: match()

// const content = `xin chào, tôi tên là Hoàng an, số điện thoại 0388875179. Thêm số nữa +84123456789`;

// const pattern = /(0|\+84)\d{9}/g;

// const result = content.match(pattern);

// console.log(result);

//Capturing Group: Kỹ thuật lấy 1 phần của Regex (Không áp dụng global)

// const content = `Lorem Ipsum hoangan.web@gmail.com is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy hoangan@fullstack.edu.vn text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently`;

// const pattern = /([a-z0-9-_\.]{3,})@([a-z-_\.0-9]+\.[a-z]{2,})/;
// const emailList = content.match(pattern);
// console.log(emailList);

//Non-Capturing Group -> Loại trừ nội dung trong cặp ngoặc tròn ra khỏi kết quả
// ?:

// const pattern =
//   /^(?:http|https):\/\/[a-z0-9-_\.]+\.([a-z]{2,})(?:\/?|\/[a-z0-9-_\.\/]+)$/;
// const str = "http://fullstack.edu.vn/khoa-hoc/fullstack-offline/index.html";

// const result = str.match(pattern);
// console.log(result);

//Greedy, Lazy -> Chỉ áp dụng với dấu chấm (.)

// const html = `<img width="200" src="https://fullstack.edu.vn/images/image01.jpg" title="F8" />`;
// const pattern = /<img.*src="(.+)"/;

// const result = html.match(pattern);

// console.log(result);

//Thay thế
// let content = `xin chào, tôi tên là Hoàng an, số điện thoại 0388875179. Thêm số nữa +84123456789`;

// const pattern = /(0|\+84)\d{9}/g;

// content = content.replace(pattern, "***");

// console.log(content);

//Đối sánh chuỗi

let content = `xin chào, tôi tên là Hoàng an, số điện thoại 0388875179. Thêm số nữa +84123456789`;

const pattern = /((0|\+84)\d{9})/g;

content = content.replace(pattern, `<a href="tel:$1" data-start="$2">$1</a>`);

console.log(content);
