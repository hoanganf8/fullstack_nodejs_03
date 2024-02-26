module.exports = class {
  #data = null; //private
  constructor(resource) {
    if (typeof this.response !== "function") {
      throw new Error("Vui lòng tạo phương tên là response");
    }
    if (Array.isArray(resource)) {
      this.#data = resource.map((instance) => this.response(instance));
    } else {
      this.#data = this.response(resource);
    }
    return this.#data;
  }
};
