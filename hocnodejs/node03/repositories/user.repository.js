const Repository = require("../core/repository");
const { User } = require("../models/index");
module.exports = class extends Repository {
  //Xác định được đang làm với model nào?
  getModel() {
    return User;
  }
  //Có phương thức nào khác không?
  getLastestUser() {
    return this.findAll({
      order: [["id", "desc"]],
      limit: 5,
    });
  }
};
