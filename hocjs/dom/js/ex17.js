var root = document.getElementById("root");
var h2 = document.createElement("h2");
h2.innerText = "Count: ";

var number = document.createTextNode(0);
h2.append(number);

root.append(h2);

var btn = document.createElement("button");
btn.innerText = "+";
root.append(btn);
var check = false;

var increment = function () {
  number.data++;
  if (check) {
    setTimeout(function () {
      increment();
    }, 10);
  }
};

btn.addEventListener("mousedown", function () {
  check = true;
  increment();
});

btn.addEventListener("mouseup", function () {
  check = false;
  increment();
});
