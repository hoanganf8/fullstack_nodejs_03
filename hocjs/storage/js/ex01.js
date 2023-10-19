//Storage:
//Kho lưu trữ dữ liệu tại trình duyệt
//Chỉ lưu trữ Text

/*
1. localStorage
- Lưu trữ vô thời hạn
- Dung lượng lưu trữ lớn

2. sessionStorage
- Lưu trữ theo phiên (Tắt trình duyệt tự xóa)
- Dung lượng lưu trữ lớn

-> Lỗi bảo mật XSS

3. Cookie
- Lưu trữ có thời hạn xác định
- Dung lượng lưu trữ nhỏ
- An toàn hơn localStorage, sessionStorage

-> Lỗi bảo mật CSRF
*/

//LocalStorage
//1. Thêm dữ liệu
// localStorage.setItem("username", "hoangan.web");

//2. Sửa dữ liệu
// localStorage.setItem("username", "hoanganit19");

//3. Đọc dữ liệu
// console.log(localStorage.getItem("username"));

//4. Xóa dữ liệu
// localStorage.removeItem("username");

//5. Xóa tất cả
// localStorage.clear();

//sessionStorage: Tương tự như các phương thức trong localStorage
// sessionStorage.setItem("username", "hoangan.web");
// sessionStorage.email = "hoangan.web@gmail.com";

//Cookie
/*
- Cookie tự động gắn vào request header khi sử dụng trình duyệt
- Server có thể yêu cầu trình duyệt set cookie thông qua response header set-cookie
*/
//1. set cookie
//expires: Thời gian sống của cookie
const expires = new Date("2023/10/20 09:00:00");
// document.cookie = `username=hoangan;expires=${expires}`;
// document.cookie = `email=hoangan.web@gmail.com;expires=${new Date(
//   "2023/10/20 12:00:00",
// )}`;

//2. Cập nhật lại cookie
// document.cookie = `username=hoanganit19`;

//3. Xóa cookie
// document.cookie = `email=;expires=${new Date().toUTCString()}`;

//4. Đọc cookie
// console.log(document.cookie);

// document.cookie = "username=hoangan.web;path=/";
