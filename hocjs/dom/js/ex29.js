// var host = document.querySelector(".content");
// var root = host.attachShadow({
//   mode: "open",
// });

// root.innerHTML = `<h1>F8 - Học lập trình để đi làm</h1>`;
// var style = document.createElement("style");
// style.textContent = `
// h1 {
//     color: red;
// }
// `;
// root.prepend(style);

component.create("todo-item", function () {
  var doName = this.innerText;
  var templateHtml = `
      <div class="todo">
          <input type="checkbox"/>
          <span>${doName}</span>
      </div>
  `;

  var template = document.createElement("template");
  template.innerHTML = templateHtml;

  var templateNode = template.content.cloneNode(true);

  templateNode.children[0].children[0].addEventListener("click", function () {
    console.log("ok");
  });

  var shadow = this.attachShadow({
    mode: "open",
  });

  shadow.append(templateNode);

  var style = document.createElement("style");
  style.textContent = `
  .todo {
    border: 1px solid red;
    padding: 5px;
    margin: 5px 0;
  }
  `;
  shadow.prepend(style);
});
