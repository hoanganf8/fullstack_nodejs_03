//Để tạo được 1 component (Thành phần web)
/*
- Có 1 hàm tạo hoặc class kế thừa từ HTMLElement
- Sử dụng object: customElements
*/

//Tạo ra 1 thẻ html có tên: hello-world

// function HelloWorld() {
//   return Reflect.construct(HTMLElement, [], HelloWorld);
// }

// HelloWorld.prototype = Object.create(HTMLElement.prototype);

// //Vòng đời component
// HelloWorld.prototype.constructor = HelloWorld;

// HelloWorld.prototype.connectedCallback = function () {
//   console.log("Nội dung của component");
//   this.innerText = "Xin chào F8";
//   var name = this.getAttribute("name");
//   console.log(name);
// };

// HelloWorld.prototype.disconnectedCallback = function () {
//   console.log("Element bị xóa khỏi DOM");
// };

// // class HelloWorld extends HTMLElement {
// //   constructor() {
// //     super();
// //   }

// //   connectedCallback() {
// //     this.innerText = "Xin chào F8";
// //   }
// // }

// customElements.define("hello-world", HelloWorld);

component.create("hello-world", function () {
  this.innerText = "Xin chào F8";
});

component.create("image-component", function () {
  var link = this.getAttribute("link");
  var width = this.getAttribute("width");
  var height = this.getAttribute("height");
  var border = this.getAttribute("border");
  var radius = this.getAttribute("radius");
  var borderColor = this.getAttribute("border-color");

  var style = document.createElement("style");
  style.textContent = `
  .box-image {
    display: inline-block;
    border: ${border}px solid ${borderColor ?? "black"};
    border-radius: ${radius ?? 0}px
  }

  .box-image img {
    display: block;
  }
  `;

  this.innerHTML = `<div class="box-image">
    <img src="${link}" width="${width}" height="${height}"/>
    </div>`;
  this.prepend(style);
});
