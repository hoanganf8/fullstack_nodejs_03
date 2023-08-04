var i = 1;
var s = 0;
while (i <= 10) {
  //   console.log(`Lần lặp thứ: ${i}`);
  s += i;
  i++;
}

console.log(`S = ${s}`);

/*
Ban đầu vòng lặp sẽ kiểm tra điều kiện
1. Nếu đúng => Chạy nội dung => Quay lại kiểm tra => Chạy nội dung...
Khi nào sai => Thoát vòng lặp

2. Nếu sai => Không chạy
*/

var i = 10;
do {
  console.log(i);
} while (i > 10);

/*
Vòng lặp sẽ chạy nội trước => Sau đó kiểm tra
Nếu đúng => Chạy tiếp
Nếu sai => Thoát vòng lặp

=> Cho dù sai thì vẫn chạy 1 lần đầu tiên
*/

//Từ khóa break, continue

// for (var i = 1; i <= 10; i++) {
//   console.log(`Lần lặp thứ ${i}`);
//   if (i === 5) {
//     // i = 10;
//     break;
//   }
// }

var begin = 3;
var end = 10;
//Tìm số chẵn nhỏ nhất trong khoảng từ begin đến end
// var even;
// for (var i = begin; i <= end; i++) {
//   if (i % 2 === 0) {
//     even = i;
//     break;
//   }
// }

// console.log(`Số chẵn nhỏ nhất: ${even}`);

for (var i = 1; i <= 10; i++) {
  console.log("============");
  console.log("F8 = " + i);
  if (i === 5) continue;
  console.log(`Lần lặp thứ ${i}`);
  console.log(`Lần lặp thứ ${i} *`);
}
