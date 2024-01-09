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
    res.render("users/index", { users });
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
      await userModel.create(body);
      req.flash("msg", "Thêm người dùng thành công");
      return res.redirect("/users");
    }
    return res.redirect("/users/add");
  },
};
