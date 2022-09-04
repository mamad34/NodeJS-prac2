const mongoose = require("mongoose");
const Task = mongoose.model("Task", {
  description: {
    type: String,
    trim: true,
    required: true,
  },
  completed: {
    type: Boolean,
    default: false,
  },
});

// const me = new User({
//   name: "     mamad2          ",
//   email: "         dick@pussy.com           ",
//   password: "dickandpussy     ",
// });

// me.save()
//   .then(() => {
//     console.log("ME", me);
//   })
//   .catch((error) => {
//     console.log("EROOR", error);
//   });

// const task = new Task({
//   description: "Fucking Alexis Texas and mia khalifa",
//   //   completed: true,
// });

// task
//   .save()
//   .then(() => {
//     console.log(task);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

module.exports = Task;
