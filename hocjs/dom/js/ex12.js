//Next tới 1 element mới: nextElementSibling

//Prev về 1 element trước:

var btnNext = document.querySelector(".next");
var btnPrev = document.querySelector(".prev");
var products = document.querySelector(".products");
var productFirst;
var productActive = (productFirst = products.querySelector(".active"));
var productLast = products.lastElementChild;
console.log(productLast);

// var productFirst = productActive;
// console.log(productActive);
// console.log(productActive.nextElementSibling);
// console.log(productActive.nextElementSibling.previousElementSibling);

//bien1 = bien2 = bien3 = giatri

var handleNext = function () {
  var nextElement = productActive.nextElementSibling;
  if (nextElement === null) {
    nextElement = productFirst;
  }
  nextElement.classList.add("active");
  productActive.classList.remove("active");

  productActive = nextElement;
};

var handlePrev = function () {
  var prevElement = productActive.previousElementSibling;
  if (prevElement === null) {
    prevElement = productLast;
  }
  prevElement.classList.add("active");
  productActive.classList.remove("active");

  productActive = prevElement;
};

btnNext.addEventListener("click", handleNext);

btnPrev.addEventListener("click", handlePrev);

document.addEventListener("keyup", function (e) {
  if (e.key === "ArrowRight") {
    //Next
    handleNext();
  }

  if (e.key === "ArrowLeft") {
    //Prev
    handlePrev();
  }
});
