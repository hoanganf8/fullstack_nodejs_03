const { Op } = require("sequelize");
const { User, Phone, Course, Role } = require("../models/index");

module.exports = {
  index: async (req, res) => {
    const { status, keyword } = req.query;
    const filters = {};
    if (status === "active" || status === "inactive") {
      filters.status = status === "active";
    }
    if (keyword) {
      filters[Op.or] = {
        fullname: {
          [Op.iLike]: `%${keyword}%`,
        },
        email: {
          [Op.iLike]: `%${keyword}%`,
        },
      };
    }
    const users = await User.findAll({
      order: [
        ["id", "desc"],
        ["fullname", "asc"],
      ],
      where: filters,
      // include: {
      //   model: Phone,
      //   as: "phone",
      // },
    });

    // for (let user of users) {
    //   const phoneInstance = await user.getPhone();
    //   user.phone = phoneInstance?.phone;
    // }

    res.render("users/index", { users, req });
  },
  add: async (req, res) => {
    const courses = await Course.findAll({
      order: [["name", "asc"]],
    });
    res.render("users/add", { courses });
  },
  handleAdd: async (req, res) => {
    const body = req.body;

    const user = await User.create({
      name: body.name,
      email: body.email,
      status: body.status === "1" ? true : false,
    });

    if (user) {
      const courses = Array.isArray(body.courses)
        ? body.courses
        : [body.courses];
      //Tạo 1 array chứa các instance của từng khóa học được chọn
      if (courses.length) {
        const coursesInstance = await Promise.all(
          courses.map((courseId) => Course.findByPk(courseId)),
        );
        await user.addCourses(coursesInstance);
      }
    }

    return res.redirect("/users");
  },
  edit: async (req, res, next) => {
    const { id } = req.params;
    try {
      const user = await User.findOne({
        where: { id },
        include: {
          model: Course,
          as: "courses",
        },
      });

      if (!user) {
        throw new Error("Không tìm thấy user");
      }
      const courses = await Course.findAll({
        order: [["name", "asc"]],
      });
      //Danh sách courses của user --> Array
      res.render("users/edit", { user, courses });
    } catch (e) {
      return next(e);
    }
  },
  handleEdit: async (req, res) => {
    const { id } = req.params;
    const body = req.body;
    const status = await User.update(
      {
        name: body.name,
        email: body.email,
        status: body.status === "1" ? true : false,
      },
      {
        where: { id },
      },
    );
    if (status) {
      const courses = Array.isArray(body.courses)
        ? body.courses
        : [body.courses];
      //Tạo 1 array chứa các instance của từng khóa học được chọn
      if (courses.length) {
        const coursesInstance = await Promise.all(
          courses.map((courseId) => Course.findByPk(courseId)),
        );
        const user = await User.findByPk(id);
        await user.setCourses(coursesInstance);
      }
    }
    return res.redirect("/users/edit/" + id);
  },
  delete: async (req, res) => {
    const { id } = req.params;
    const status = await User.destroy({
      where: { id },
      force: true, //Xóa vĩnh viễn
    });
    return res.redirect("/users");
  },
  permission: async (req, res) => {
    const { id } = req.params;
    const roles = await Role.findAll();
    const user = await User.findByPk(id, {
      include: {
        model: Role,
        as: "roles",
      },
    });
    res.render("users/permission", { roles, user });
  },
  handlePermission: async (req, res) => {
    const { id } = req.params;

    if (!req.body.roles) {
      req.body.roles = [];
    }
    const roles = Array.isArray(req.body.roles)
      ? req.body.roles
      : [req.body.roles];

    const user = await User.findByPk(id);
    if (user) {
      const roleIntances = await Promise.all(
        roles.map((roleId) => Role.findByPk(roleId)),
      );
      await user.setRoles(roleIntances);
    }

    return res.redirect("/users/permission/" + id);
  },
};
