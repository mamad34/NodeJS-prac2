const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/task-manager-api", {
  useNewUrlParser: true,
  // useCreateIndex: true,
});

const User = mongoose.model("User", {
  name: {
    type: String,
  },
  age: {
    type: Number,
  },
});

const me = new User({
  // name: "Mamad",
  // age: "seqweqwe",
});

me.save()
  .then((me) => {
    console.log(me);
  })
  .catch((error) => {
    console.log("Error", error);
  });

const Tasks = mongoose.model("Tasks", {
  description: {
    type: String,
    required: true,
  },
  completed: { type: Boolean },
});

// const task = new Tasks({
//   description: "Some BS description to do ",
//   completed: true,
// });

// task
//   .save()
//   .then((task) => {
//     console.log(task);
//   })
//   .catch((err) => {
//     console.log(err);
//   });
