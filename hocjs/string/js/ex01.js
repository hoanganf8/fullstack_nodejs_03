/*
Chuỗi trong Javascript có 1 hàm tạo tên là String để định nghĩa các thuộc tính và phương thức xử lý
*/

// console.log(String, typeof String);
console.log(String.prototype);

//Các phương thức xử lý chuỗi
var str = "Xin chào f8 - Hoàng an f8";
//1. length => Lấy độ dài của chuỗi
// console.log(str.length);

//2. charAt(index) => Lấy ký tự của chuỗi theo index (index bắt đầu từ 0)
// console.log(str.charAt(1));
// console.log(str[1]);

//3. charCodeAt(index) => Lấy mã ASCII của ký tự theo index
// console.log(str.charCodeAt(0));

//4. concat(chuoi1, chuoi2,...) => Nối chuỗi
// console.log(str.concat("A", "B", "C"));

//5. indexOf(sub) => Tìm vị trí xuất hiện đầu tiên của chuỗi con trong chuỗi cha và trả về index, nếu không tìm thấy trả về -1
// console.log(str.indexOf("f8"));

//6. lastIndexOf(sub) => Tìm vị trí cuối
// console.log(str.lastIndexOf("f8"));

//7. includes(sub) => Tìm chuỗi con trong chuỗi cha, trả về true/false
// console.log(str.includes("f8"));

//8. slice(start, end) => Cắt chuỗi từ chuỗi cha từ start đến end
// console.log(str.slice(1, 3));
// console.log(str.slice(1));
// console.log(str.slice(-4));

//9. replace(search, with) => Thay thế chuỗi
// console.log(str.replace("f8", "f88"));
//Lưu ý: Hàm này hỗ trợ thay thế bằng biểu thức chính quy (Regex)

//Ví dụ: Thay thế chữ số sau chữ f thành dấu *
// var pattern = /f(\d+)/g;
// console.log(str.replace(pattern, "f<span>$1</span>"));

//10. replaceAll(search, width) => Tìm kiếm tất cả

// console.log(str.replaceAll("f8", "f88"));

//11. split(char) => Tách chuỗi thành mảng

// console.log(str.split(" "));

//12. trim() => Xóa khoảng trắng đầu và cuối chuỗi

// console.log("            Hoàng An ".trim());

//13. trimStart() => Loại bỏ đầu chuỗi

//14. trimEnd() => Loại bỏ cuối chuỗi

//15. match() => Cắt chuỗi dựa vào Regex

// var content = `Lorem Ipsum is 0388875179 simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy 0123456789 text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining +84388856111 essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum`;

// var pattern = /(0|\+84)\d{9}/g;
// var phones = content.match(pattern);
// console.log(phones);

//16. toLowerCase()

//17. toUpperCase()
