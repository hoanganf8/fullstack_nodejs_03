const homeController = {
  index: (req, res) => {
    //Nhận dữ liệu từ request
    //Validate
    //Thao tác với Model (Database)
    //Xử lý logic nghiệp vụ
    //Trả về response: view, redirect, json,...
    // res.send("<h1>Học Express không khó</h1>");
    const title = `<i>Học Back-End dễ hơn Front-End</i>`;
    const status = false;
    const users = ["User 1", "User 2", "User 3"];
    //Set session
    req.session.message = "Học lập trình không khó";
    req.session.count = 1;
    delete req.session.count; //Xóa session count
    res.render("home/index", { title, status, users });
  },

  showProducts: (req, res) => {
    //get session
    console.log(req.session.message);

    console.log(req.session.count);
    res.render("home/products", {
      layout: false,
    });
  },
};

export default homeController;

/*
Controller: Tương ứng với module
Action: Hàm thể hiện 1 chức năng trong 1 module
+ add
+ edit
+ delete
+ lists
*/
