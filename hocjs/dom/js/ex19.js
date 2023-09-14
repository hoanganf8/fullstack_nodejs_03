//DOMContentLoaded -> Cây DOM được hình thành
window.addEventListener("DOMContentLoaded", function () {
  var img = document.querySelector("img");
  console.log(img);
  img.id = "image";
});

//load => Tất cả tài nguyên trên trang web được tải: css, js, img, video, audio,...
window.addEventListener("load", function () {
  //   var img = document.querySelector("img");
  //   console.log(img.width);
  var preloader = document.querySelector(".preloader");
  preloader.classList.add("hide");
  console.log(window.performance);
  //   var loadTime =
  //     window.performance.timing.domContentLoadedEventEnd -
  //     window.performance.timing.navigationStart;

  //   console.log(loadTime);
});
