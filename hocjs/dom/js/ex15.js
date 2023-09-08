//Tạo element
var progressBar = document.querySelector(".progress-bar");
var progress = progressBar.querySelector(".progress");
var progressSpan = progress.querySelector("span");

var progressBarWidth = progressBar.clientWidth;

var isDrag = false;
var initialClientX = 0;
var current = 0;
var currentWidth = 0;

var handleChange = function (width) {
  var value = (width * 100) / progressBarWidth;
  if (value < 0) {
    value = 0;
  }

  if (value > 100) {
    value = 100;
  }

  progress.style.width = `${value}%`;
  currentWidth = width;
};

progressBar.addEventListener("mousedown", function (e) {
  if (e.which === 1) {
    handleChange(e.offsetX);
    isDrag = true;
    initialClientX = e.clientX;
    current = e.offsetX;
  }
});

progressSpan.addEventListener("mousedown", function (e) {
  e.stopPropagation();
  isDrag = true;
  initialClientX = e.clientX;
});

document.addEventListener("mouseup", function () {
  isDrag = false;
  current = currentWidth;
});

document.addEventListener("mousemove", function (e) {
  if (isDrag) {
    // console.log(e.clientX);
    var moveWidth = e.clientX - initialClientX;
    handleChange(current + moveWidth);
    //moveWidth chỉ là khoảng kéo thêm
  }
});

//Xây dựng trình phát nhạc
var audio = new Audio("./mp3/yeu-voi-vang-remix.mp3");

var playBtn = document.querySelector(".play-btn");

var currentTimeEl = progressBar.previousElementSibling;

var durationEl = progressBar.nextElementSibling;

var getTime = function (seconds) {
  //Tính số phút
  var mins = Math.floor(seconds / 60);

  //Tính số giây còn lại
  seconds = Math.floor(seconds - mins * 60);

  return `${mins < 10 ? "0" + mins : mins}:${
    seconds < 10 ? "0" + seconds : seconds
  }`;
};

audio.addEventListener("loadeddata", function () {
  durationEl.innerText = getTime(audio.duration);
});

var pauseIcon = `<i class="fa-solid fa-pause"></i>`;

var playIcon = `<i class="fa-solid fa-play"></i>`;

playBtn.addEventListener("click", function () {
  //   console.log(audio.paused);
  if (audio.paused) {
    audio.play();
    this.innerHTML = pauseIcon;
  } else {
    audio.pause();
    this.innerHTML = playIcon;
  }
});

audio.addEventListener("timeupdate", function () {
  //   console.log(audio.currentTime);
  currentTimeEl.innerText = getTime(audio.currentTime);

  var value = (audio.currentTime * 100) / audio.duration;
  progress.style.width = `${value}%`;
});
