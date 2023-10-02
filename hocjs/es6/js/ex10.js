//Async Await
/*
Async Function luôn trả về 1 promise
*/

const getUser = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Hoàng An");
      //   reject("Error");
    }, 1000);
  });
};

//Async Function kết hợp với await
// const showUser = async () => {
//   try {
//     const data = await getUser();
//     console.log(data);
//   } catch (e) {
//     console.log(e);
//   } finally {
//     console.log("Hoàn thành");
//   }
// };

// showUser();

//IIFE
(async () => {
  const data = await getUser();
  console.log(data);
})();

//Await trong vòng lặp
//Promise.all()
//Chuyển promise chaining => async await
