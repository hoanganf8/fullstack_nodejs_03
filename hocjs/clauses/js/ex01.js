var a = 9;
console.log(`Xin chào F8`);
console.log(`Xin chào F8`);
console.log(`Xin chào F8`);

if (a >= 10) {
  console.log(`Hoàng An`);
  console.log(`Hoàng An`);
  console.log(`Hoàng An`);
}

/*
Câu lệnh rẽ nhánh

1. if else

2.1. Câu lệnh if thiếu

if (dieukien) {
    Nội dung
}

2.2. Câu lệnh if đủ

if (dieukien) {
    Nội dung đúng
} else {
    Nội dung sai
}

2.3. Câu lệnh if nhiều nhánh

if (dieukien1) {
    Nội dung 1
} else if (dieukien2) {
    Nội dung 2
} else if (dieukien3) {
    Nội dung 3
} else {
    Nội dung còn lại
}

2.4. Câu lệnh if lồng nhau

if (dieukien1) {
    if (dieukien2) {
        Nội dung dieukien2 (Đúng)
    } else {
        Nội dung dieukien2 (Sai)
    }
} else {
    Nội dung sai
}

2. switch case
*/

/*
Bài tập tính lương

var total = 15000000

=> Tính lương thực nhận sau khi đã trừ thuế

- Nếu lương < 5tr => Thuế = 3%
- Nếu lương từ 5tr đến 15tr => Thuế = 5%
- Nếu lương trên 15tr => Thuế = 10%
*/

var total = 15000000;
var income, tax;
if (total < 5000000) {
  tax = 3;
} else if (total > 15000000) {
  tax = 10;
} else {
  tax = 5;
}

income = total - (total * tax) / 100;

console.log(`Lương thực nhận: ${income}`);
