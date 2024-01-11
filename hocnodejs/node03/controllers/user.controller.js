const { User } = require("../models/index");

module.exports = {
  index: async (req, res) => {
    // const users = await User.findAll({
    //   //   attributes: ["id", "name", "email"],
    //   //   where: {
    //   //     id: 4,
    //   //   },
    //   order: [
    //     ["id", "desc"],
    //     ["name", "asc"],
    //   ],
    // });
    // const user = await User.findByPk(1);
    const user = await User.findOne({
      where: { id: 2 },
    });

    res.json(user);
  },
};
