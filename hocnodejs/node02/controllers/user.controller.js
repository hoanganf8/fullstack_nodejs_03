const userModel = require("../models/user.model");
const { string } = require("yup");
module.exports = {
  index: async (req, res, next) => {
    let users;
    const { status, keyword } = req.query;
    try {
      users = await userModel.all(status, keyword);
      //   console.log(users);
    } catch (e) {
      return next(e);
    }
    const msg = req.flash("msg");
    res.render("users/index", { users, msg });
  },
  add: (req, res) => {
    res.render("users/add", { req });
  },
  handleAdd: async (req, res) => {
    const body = await req.validate(req.body, {
      name: string().required("Tên bắt buộc phải nhập"),
      email: string()
        .required("Email bắt buộc phải nhập")
        .email("Email không đúng định dạng")
        .test("check-email", "Email đã tồn tại", async (value) => {
          const result = await userModel.existEmail(value);
          return !result.length;
        }),
      status: string().test(
        "check-status",
        "Trạng thái không hợp lệ",
        (value) => {
          //return true ==> passes
          return +value === 0 || +value === 1;
        },
      ),
    });
    if (body) {
      //Gọi create
      body.status = +body.status === 1;
      await userModel.create(body);
      req.flash("msg", "Thêm người dùng thành công");
      return res.redirect("/users");
    }
    return res.redirect("/users/add");
  },
  edit: async (req, res, next) => {
    const { id } = req.params;
    req.session.currentId = id;
    try {
      const user = await userModel.find(id);
      if (!user.length) {
        throw new Error("User không tồn tại");
      }
      user[0].status = user[0].status ? 1 : 0;

      req.old = user[0];
      const msg = req.flash("msg");
      res.render("users/edit", { req, msg });
    } catch (e) {
      return next(e);
    }
  },
  handleEdit: async (req, res, next) => {
    const { id } = req.params;
    if (id !== req.session.currentId) {
      return next(new Error("Back..."));
    }
    const body = await req.validate(req.body, {
      name: string().required("Tên bắt buộc phải nhập"),
      email: string()
        .required("Email bắt buộc phải nhập")
        .email("Email không đúng định dạng")
        .test("check-email", "Email đã tồn tại", async (value) => {
          const result = await userModel.existEmail(value, id);
          return !result.length;
        }),
      status: string().test(
        "check-status",
        "Trạng thái không hợp lệ",
        (value) => {
          //return true ==> passes
          return +value === 0 || +value === 1;
        },
      ),
    });
    if (body) {
      //Gọi create
      body.status = +body.status === 1;
      await userModel.update(body, id);
      req.flash("msg", "Cập nhật người dùng thành công");
    }
    return res.redirect("/users/edit/" + id);
  },
  delete: async (req, res, next) => {
    const { id } = req.params;
    try {
      await userModel.delete(id);
      req.flash("msg", "Xóa người dùng thành công");
      return res.redirect("/users");
    } catch (e) {
      return next(e);
    }
  },
};
