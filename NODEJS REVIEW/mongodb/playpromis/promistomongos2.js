require("../src/db/mongoose");
const Task = require("../src/models/task");

Task.findByIdAndDelete("630f5445f9e96ef7535e0ad8").then((task) => {
  console.log(task);
  return Task.countDocuments({
    completed: false,
  })
    .then((result) => {
      console.log(result);
    })
    .catch((e) => {
      console.log(e);
    });
});
