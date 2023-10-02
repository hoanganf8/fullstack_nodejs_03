/*
try {

}catch(exception) {
    
}

-> Bắt các lỗi ngoại lệ

Code logic -> Để trong block try
Nếu xảy ra lỗi => Chuyển sang block catch và lưu vào exception
*/

try {
  //   getA();
  //   console.log(a);
  const a = 10;
  //Bắn 1 lỗi logic vào Catch
  if (a < 20) {
    throw new Error("a phải từ 20 trở lên");
  }
} catch (exception) {
  document.body.innerHTML = `<h3>${exception.message}</h3>`;
} finally {
  console.log("Đã xong");
}

//Try => Catch => finally

console.log("Chương trình tiếp");

// throw new Error("Hello F8");
