var component = {
  create: function (name, callback) {
    var Component = function () {
      return Reflect.construct(HTMLElement, [], this.constructor);
    };

    Component.prototype = Object.create(HTMLElement.prototype);

    //Lifecycle Component
    //1. constructor
    Component.prototype.constructor = Component;

    //2. connectedCallback
    Component.prototype.connectedCallback = callback;

    customElements.define(name, Component);
  },
};
