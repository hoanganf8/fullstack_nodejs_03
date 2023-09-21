HTMLElement.prototype.css = function (style = {}) {
  Object.assign(this.style, style);
};
var content = document.querySelector(".content");
// console.log([content]);

content.css({
  color: "red",
  fontWeight: "bold",
  textDecoration: "underline",
});

/*
Thư viện tab: 
document.querySelector('#tab-1').tab()
document.querySelector('#home-slide').carousel({
    nav: true,
    dots: true,
    autoPlay: true
})
*/
