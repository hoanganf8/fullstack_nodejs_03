const UserRepository = require("../repositories/user.repository");
const userRepository = new UserRepository();
module.exports = {
  create: (data) => {
    //Gọi model
    return userRepository.create(data);
  },
  existEmail: (email) => {
    //Gọi model
    //Trả về true/false
  },
  getUsers: () => {
    return userRepository.getLastestUser();
  },
};
