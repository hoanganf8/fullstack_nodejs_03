const { Role, Permission } = require("../models/index");
module.exports = {
  index: (req, res) => {
    res.render("roles/index");
  },
  add: async (req, res) => {
    res.render("roles/add");
  },
  handleAdd: async (req, res) => {
    let { name, permissions } = req.body;
    if (!name) {
      req.flash("msg", "Vui lòng nhập tên vai trò");
      return res.redirect("/roles/add");
    }
    if (!permissions) {
      permissions = [];
    }
    permissions = Array.isArray(permissions) ? permissions : [permissions];
    const role = await Role.create({ name });

    if (role && permissions.length) {
      //Lấy được 1 mảng chứa danh sách các instance của từng permission (Đã được thêm vào database hoặc được lấy ra từ database)
      const permissionInstances = await Promise.all(
        permissions.map(async (value) => {
          const [permissionInstance] = await Permission.findOrCreate({
            where: { value: value.trim() },
            defaults: { value: value.trim() },
          });
          return permissionInstance;
        }),
      );

      //Thêm role và permission vào bảng: roles_permissions
      await role.addPermissions(permissionInstances);
    }
    return res.redirect("/roles");
  },
};
