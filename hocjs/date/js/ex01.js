//Xử lý thời gian

const today = new Date();
// console.log({ today });

const date = new Date("2023-10-20 21:40:00");
// console.log(date);

// console.log(date.getDate());
// console.log(date.getDay());
// console.log(date.getMonth());
// console.log(date.getFullYear());
// console.log(date.getHours());
// console.log(date.getMinutes());
// console.log(date.getSeconds());
// console.log(date.getMilliseconds());
// console.log(date.getTime()); //Số mili giây tính từ năm 1970 đến thời điểm cần lấy

date.setDate(19);
// console.log(date);

const clock = () => {
  const today = new Date();
  const days = [
    "Chủ nhật",
    "Thứ hai",
    "Thứ ba",
    "Thứ tư",
    "Thứ năm",
    "Thứ sáu",
    "Thứ bảy",
  ];
  const output = `Hôm nay là: ${
    days[today.getDay()]
  } - ${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}`;
  document.body.innerHTML = output;
};

setInterval(clock, 1000);

//Chọn thời gian kết thúc khuyến mãi -> Cuối tháng
//Tính ra: Còn bao ngày, giờ, phút, giây -> Đếm ngược
//Khi nào hết thời gian -> Ẩn countdown
