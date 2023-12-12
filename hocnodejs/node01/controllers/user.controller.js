const userController = {
  index: (req, res) => {
    const { status, keyword } = req.query;
    // const userAgent = req.headers["user-agent"];
    const userAgent = req.get("user-agent");
    const email = req.cookies.email;
    res.cookie("email", "hoangan@fullstack.edu.vn", {
      maxAge: 86400,
      path: "/",
      httpOnly: true,
    });
    res.set("abc", "xyz");
    res.send(`<h1>Danh sách người dùng</h1>
        <h2>Status: ${status}</h2>
        <h2>Keyword: ${keyword}</h2>
        <h2>User Agent: ${userAgent}</h2>
        <h2>Email: ${email}</h2>
        `);
  },

  add: (req, res) => {
    res.send("<h1>Thêm người dùng</h1>");
  },

  active: (req, res) => {
    const id = req.params.id;
    res.send("<h1>Kích hoạt người dùng: " + id + "</h1>");
  },

  courses: (req, res) => {
    res.send("<h1>Danh sách khóa học</h1>");
  },

  courseActive: (req, res) => {
    res.send("<h1>Danh sách khóa học kích hoạt</h1>");
  },

  coursePending: (req, res) => {
    res.send("<h1>Danh sách khóa học chờ kích hoạt</h1>");
  },
};

export default userController;
