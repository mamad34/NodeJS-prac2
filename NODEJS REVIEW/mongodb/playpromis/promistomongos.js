require("../src/db/mongoose");

const User = require("../src/models/user");

// 630e11587f5e4824ed3981f2

User.findByIdAndUpdate("630e11587f5e4824ed3981f2", { age: 1 })
  .then((user) => {
    console.log(user);
    return User.countDocuments({ age: 1 });
  })
  .then((result) => {
    console.log(result);
  })
  .catch((e) => {
    console.log(e);
  });
