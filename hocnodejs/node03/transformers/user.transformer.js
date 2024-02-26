const Transformer = require("../core/transformer");
module.exports = class extends Transformer {
  //Định nghĩa dữ liệu trả về của API
  response(instance) {
    return {
      UID: instance.id,
      name: instance.fullname,
      status: instance.status,
      statusText: instance.status ? "Kích hoạt" : "Chưa kích hoạt",
      createdAt: instance.created_at,
      updatedAt: instance.updated_at,
    };
  }
};
