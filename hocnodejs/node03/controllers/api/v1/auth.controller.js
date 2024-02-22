const { User, Blacklist } = require("../../../models/index");
const { successResponse, errorResponse } = require("../../../utils/response");
const { createAccessToken, decodeToken } = require("../../../utils/jwt");
const bcrypt = require("bcrypt");
module.exports = {
  login: async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
      return errorResponse(res, 400, "Bad Request");
    }
    const user = await User.findOne({ where: { email } });
    if (!user) {
      return errorResponse(res, 404, "User Not Found");
    }
    const passwordHash = user.password;
    if (!bcrypt.compareSync(password, passwordHash)) {
      return errorResponse(res, 400, "Bad Request", {
        password: "Password Wrong",
      });
    }
    //Tạo token
    const token = createAccessToken({ userId: user.id });
    return successResponse(res, 200, "Success", {
      accessToken: token,
    });
  },
  profile: async (req, res) => {
    return successResponse(res, 200, "Success", req.user);
  },
  logout: async (req, res) => {
    const { accessToken, exp } = req.user;
    const [blacklist] = await Blacklist.findOrCreate({
      where: { token: accessToken },
      defaults: { token: accessToken, expired: exp },
    });
    if (blacklist) {
      return successResponse(res, 200, "Success");
    }
    return errorResponse(res, 500, "Server Error");
  },
};
