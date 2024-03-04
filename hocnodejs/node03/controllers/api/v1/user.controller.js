const { User } = require("../../../models/index");
const { Op } = require("sequelize");
const { object, string } = require("yup");
const bcrypt = require("bcrypt");
const UserTransformer = require("../../../transformers/user.transformer");
const client = require("../../../utils/redis");
module.exports = {
  index: async (req, res) => {
    const response = {};
    try {
      const {
        order = "asc",
        sort = "id",
        status,
        q,
        page = 1,
        limit,
      } = req.query;
      const filter = {};
      if (status === "true" || status === "false") {
        filter.status = status === "true";
      }
      if (q) {
        filter[Op.or] = {
          fullname: {
            [Op.iLike]: `%${q}%`,
          },
          email: {
            [Op.iLike]: `%${q}%`,
          },
        };
      }
      const options = {
        attributes: {
          exclude: ["password", "provider_id"],
        },
        order: [[sort, order]],
        where: filter,
      };
      if (Number.isInteger(+limit) && Number.isInteger(+page)) {
        const offset = (page - 1) * limit;
        options.limit = limit;
        options.offset = offset;
      }

      //Check bộ nhớ cache có users. Giả sử key: users-cache
      let resultCache = await (await client).get("users");
      if (!resultCache) {
        resultCache = await User.findAndCountAll(options);
        await (await client).set("users", JSON.stringify(resultCache));
      } else {
        resultCache = JSON.parse(resultCache);
      }
      const { count, rows: users } = resultCache;

      Object.assign(response, {
        status: 200,
        message: "Success",
        data: new UserTransformer(users),
        count,
      });
    } catch (e) {
      Object.assign(response, {
        status: 500,
        message: "Server Error",
      });
    }

    res.status(response.status).json(response);
  },
  find: async (req, res) => {
    const { id } = req.params;
    const response = {};
    try {
      const user = await User.findByPk(id);
      if (!user) {
        const error = new Error("User Not Found");
        error.status = 404;
        throw error;
      }
      Object.assign(response, {
        status: 200,
        message: "Success",
        data: new UserTransformer(user),
      });
    } catch (e) {
      Object.assign(response, {
        status: e.status || 500,
        message: e.message,
      });
    }
    res.status(response.status).json(response);
  },
  store: async (req, res) => {
    const response = {};
    try {
      const schema = object({
        fullname: string().required("Tên bắt buộc phải nhập"),
        email: string()
          .required("Email bắt buộc phải nhập")
          .email("Email không đúng định dạng")
          .test("check-unique", "Email đã tồn tại", async (value) => {
            const user = await User.findOne({ where: { email: value } });
            return !user;
          }),
        password: string().required("Mật khẩu bắt buộc phải nhập"),
        status: string().test(
          "check-status",
          "Trạng thái không hợp lệ",
          (value) => {
            return value === "true" || value === "false";
          },
        ),
      });
      const body = await schema.validate(req.body, { abortEarly: false });
      const user = await User.create({
        fullname: body.fullname,
        email: body.email,
        password: bcrypt.hashSync(body.password, 10),
        status: body.status,
        provider_id: body.provider_id,
      });
      delete user.dataValues.password;
      Object.assign(response, {
        status: 201,
        message: "Success",
        data: user,
      });
    } catch (e) {
      const errors = Object.fromEntries(
        e.inner.map(({ path, message }) => [path, message]),
      );
      Object.assign(response, {
        status: 400,
        message: "Bad Request",
        errors,
      });
    }

    res.status(response.status).json(response);
  },
};
