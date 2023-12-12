const authController = {
  //GET
  login: (req, res) => {
    res.render("auth/login", {
      layout: "layouts/authLayout",
    });
  },

  //POST
  handleLogin: (req, res) => {
    console.log(req.body);
    res.send("Submit");
  },
};

export default authController;
