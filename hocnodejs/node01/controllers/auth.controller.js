import { object, string } from "yup";
import { getError } from "../utils/validate.js";

const authController = {
  //GET
  login: (req, res) => {
    const errors = req.flash("errors");

    res.render("auth/login", {
      layout: "layouts/authLayout",
      errors,
      getError,
    });
  },

  //POST
  handleLogin: async (req, res) => {
    const errors = {};
    // let { email, password } = req.body;
    // if (!email.trim()) {
    //   errors.email = "Email không được để trống";
    // }
    // if (!password.trim()) {
    //   errors.password = "Mật khẩu không được để trống";
    // }
    //Các bước khi làm việc với validate
    //1. Xác định rule
    const schema = object({
      email: string()
        .email("Email không đúng định dạng")
        .required("Email bắt buộc phải nhập"),
      password: string().required("Mật khẩu bắt buộc phải nhập"),
    });

    //2. Xác định message
    //3. Kiểm tra (validate)
    try {
      const data = await schema.validate(req.body, {
        abortEarly: false,
      });
    } catch (e) {
      const errors = Object.fromEntries(
        e.inner.map(({ path, message }) => [path, message]),
      );
      req.flash("errors", errors);
    }

    return res.redirect("/dang-nhap");
  },
};

export default authController;
