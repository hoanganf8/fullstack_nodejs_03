//DOM Nodes
// -> Thao tác với các thẻ html thông qua object
/*
Nodes: 
- Element Node
- Text Node
- Comment Node
*/
var content = document.querySelector(".content");
// var h2 = content.querySelector("h2");
var btn = document.querySelector(".btn");

// h2.addEventListener("click", function () {
//   this.style.color = "red";
// });

// btn.addEventListener("click", function () {
//   content.innerHTML += `<p>Hello F8</p>`;
//   var h2 = content.querySelector("h2");
//   h2.addEventListener("click", function () {
//     this.style.color = "red";
//   });
// });

//Tạo mới element
var h1 = document.createElement("h1");
h1.classList.add("title");
h1.innerText = "Fullstack Offline";
console.log(h1);
// content.appendChild(h1);
content.append(h1);

var h2 = document.createElement("h2");
h2.innerText = "Hoàng an F8";
content.prepend(h2);

//Bài tập: Tạo cặp thẻ ul li giống như dưới và đẩy vào content (Thêm vào cuối)
/*
<ul>
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
</ul>
*/

var ul = document.createElement("ul");
for (var i = 1; i <= 3; i++) {
  var li = document.createElement("li");
  li.innerText = "Item " + i;
  ul.append(li);
}

content.append(ul);
// console.log(ul);

btn.addEventListener("click", function () {
  var li = document.createElement("li");
  li.innerText = "Item " + i++;
  ul.append(li);
  ul.firstElementChild.remove();
});

var p = document.createElement("p");
p.innerText = "Hôm nay bận gì?";
content.insertBefore(p, h1);

var h2 = document.createElement("h2");
h2.innerText = "Tối nay uống gì?";
content.replaceChild(h2, h1);

//Xóa ul nằm trong content
content.removeChild(ul);

var textNode = document.createTextNode("ABC");
content.append(textNode);
textNode.data = "ABCD";
console.log([textNode]);

var comment = document.createComment("Demo Comment");
content.append(comment);

var a = document.createElement("a");
a.innerText = "F8";
a.href = "https://fullstack.edu.vn";

var target = document.createAttribute("target");
target.value = "_blank";
a.setAttributeNode(target);
content.append(a);

a.removeAttributeNode(target);

// console.log([target]);
