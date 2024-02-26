const { User, Blacklist, UserToken } = require("../../../models/index");
const { successResponse, errorResponse } = require("../../../utils/response");
const {
  createAccessToken,
  createRefreshToken,
  decodeToken,
} = require("../../../utils/jwt");
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
    const accessToken = createAccessToken({ userId: user.id });
    const refreshToken = createRefreshToken();
    await UserToken.create({
      user_id: user.id,
      refresh_token: refreshToken,
    });
    return successResponse(res, 200, "Success", {
      accessToken,
      refreshToken,
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
  refresh: async (req, res) => {
    //Cấp lại access token mới
    const { refresh_token: refreshToken } = req.body;
    if (!refreshToken) {
      return errorResponse(
        res,
        400,
        "Bad Request",
        "Vui lòng cung cấp Refresh Token",
      );
    }
    try {
      decodeToken(refreshToken);
      const userToken = await UserToken.findOne({
        where: { refresh_token: refreshToken },
      });
      if (!userToken) {
        throw new Error("Token not exist");
      }
      const { user_id: userId } = userToken;
      //Khởi tạo access token mới
      const accessToken = createAccessToken({ userId: userId });
      return successResponse(res, 200, "Success", {
        accessToken,
        refreshToken,
      });
    } catch {
      return errorResponse(res, 401, "Unauthorize");
    }
  },
};
