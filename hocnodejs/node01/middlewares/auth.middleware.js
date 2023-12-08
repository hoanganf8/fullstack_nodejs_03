//Middleware chỉ là 1 hàm
//Dùng để lọc request trước cho request tiếp tục đi
const isLogin = false;
const authMiddleware = (req, res, next) => {
  if (!isLogin) {
    return res.redirect("/dang-nhap");
  }
  next();
};

export default authMiddleware;
