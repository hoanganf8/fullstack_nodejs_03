//Base Repository
module.exports = class {
  constructor() {
    this.model = this.getModel();
  }
  create(data) {
    return this.model.create(data);
  }
  update(data, condition = {}) {
    return this.model.update(data, {
      where: condition,
    });
  }
  updateByPk(data, id) {
    return this.model.update(data, {
      where: { id },
    });
  }
  delete(condition = {}) {
    return this.model.destroy({ where: condition });
  }
  deleteByPk(id) {
    return this.model.destroy({ where: { id } });
  }
  findAll(options = {}) {
    return this.model.findAll(options);
  }
  findOne(options = {}) {
    return this.model.findOne(options);
  }
  findByPk(id, options = {}) {
    return this.model.findByPk(id, options);
  }
};
