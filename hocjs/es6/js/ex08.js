//Javascript là ngôn ngữ lập trình bất đồng bộ

/*
Giả sử mỗi hàm mất 1 giây để xử lý

a() -> b() -> c() -> Bất đồng bộ => Tổng thời gian thực thi 3 hàm là 1 giây

a() -> b() -> c() -> Đồng bộ => Tổng thời gian thực thi 3 hàm là 3 giây

3 cách để xử lý bất đồng bộ

- Callback Function
- Promise Object
- Async Await Function
*/

// const downloadImage = (callback, ...args) => {
//   setTimeout(() => {
//     console.log("Download thành công");
//     if (typeof callback === "function") {
//       callback(...args);
//     }
//   }, 1000);
// };

// const showMessage = (size) => {
//   console.log("Hiển thị hình ảnh: " + size);
// };

// // downloadImage(() => {
// //   showMessage("big");
// // });

// downloadImage(showMessage, "Big");

//Promise
// -> Object đặc biệt dùng để xử lý các tác vụ bất đồng bộ
/*
Promise State
- pending -> Chờ xử lý
- fulfilled -> Xử lý thành công
- reject -> Xử lý thất bại
*/

const getUsers = () => {
  const users = ["User 1", "User 2", "User 3"];

  return new Promise((resolve, reject) => {
    //resolve, reject => Là Function
    setTimeout(() => {
      //Logic lấy dữ liệu từ Server
      //Nếu thành công -> Gọi resolve()
      //Nếu thất bại -> Gọi reject
      //   resolve(users); //Giải quyết
      resolve(users);
      reject("Lỗi mạng");
    }, 1000);
  });
};

const showMessage = () => {
  console.log("Lấy dữ liệu thành công");
};

getUsers()
  .then((users) => {
    console.log(users);
    showMessage();
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("Hoàn thành");
  });

//Promise Chaining

const getA = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("get A");
    }, 1000);
  });
};
const getB = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("get B");
    }, 500);
  });
};
const getC = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("get C");
    }, 2000);
  });
};
//Hiển thị theo đúng thứ tự: get A => get B => get C

// getA().then((dataA) => {
//   console.log(dataA);
//   getB().then((dataB) => {
//     console.log(dataB);
//     getC().then((dataC) => {
//       console.log(dataC);
//     });
//   });
// });

//Promise Chaining
getA()
  .then((data) => {
    console.log(data);
    return getB();
  })
  .then((data) => {
    console.log(data);
    return getC();
  })
  .then((data) => {
    console.log(data);
  });
