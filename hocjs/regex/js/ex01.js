//Regular Expression, Regex = Biểu thức chính quy
/*
- Các quy tắc dùng để xử lý chuỗi nâng cao
- Tạo bởi các ký hiệu đại diện cho các ký tự

Tác dụng: 
- So khớp: Kiểm tra chuỗi thỏa mãn điều kiện
-> test()
- Cắt chuỗi
-> match()
- Thay thế
-> replace()

-> pattern: /regex/modifier

Website test: https://regex101.com/

Các ký hiệu cơ bản: 
- string: Khớp 1 chuỗi cố định
- ^: Khớp đầu chuỗi
- $: Khớp cuối chuỗi
- [a-z]: Chữ thường
- [A-Z]: Chữ hoa
- [0-9]: Số
- [charList]: Các ký tự
=> Lưu ý: Các ký hiệu trong cặp ngoặc [] sẽ kết hợp với nhau theo điều kiện hoặc

Mặc định các biểu thức sẽ có độ dài = 1

Các ký hiệu độ dài:
- {min, max} -> Độ dài từ min đến max
- {value} -> Độ dài cố định value
- {min,} -> Độ dài >= min

Các ký hiệu viết tắt của độ dài
- {0,} -> *
- {1,} -> +
- {0,1} -> ?

-> Thực hành: Kiểm tra 1 username hợp lệ
+ bắt đầu bằng 1 chữ thường
+ có thể chứa: chữ thường, dấu gạch dưới, gạch ngang, số
+ độ dài từ 6 ký tự trở lên

Nếu gặp các ký tự đặc biệt thuộc biểu chính quy, cần thêm ký tự \ phía trước: / [ ] ., +, * ? = ...

Các ký hiệu viết tắt khác:
\d -> [0-9]
\D -> Ngược lại của \d
\s -> Khoảng trắng
\S -> Ngược lại của \s
\w -> Đại diện cho: chữ thường, chữ hoa, số, dấu gạch dưới
\W -> Ngược lại của \w

Ký hiệu phủ định: ^
Ký hiệu hoặc: | (Nên bọc điều kiện hoặc trong cặp ngoặc tròn)

Ký hiệu đại diện cho tất cả các ký tự: .
*/

// const pattern = /^[a-z][a-z0-9-_]{4,}[a-z0-9]$/;
// const str = "hoanganit19-";
// const pattern = /^https:\/\/[a-z-_0-9\.]+\.[a-z]{2,}$/;
// const str = "https://fullstack.edu.vn";

// const pattern =
//   /^(http|https):\/\/[a-z0-9-_\.]+\.[a-z]{2,}(\/?|\/[a-z0-9-_\.\/]+)$/;
// const str = "http://fullstack.edu.vn/khoa-hoc/fullstack-offline/index.html";

const pattern = /^<[a-z\d-]+.*>.+<\/[a-z\d-]+>$/;
const str = `<h1>F8</h1>`;
const check = pattern.test(str);
console.log(check);
