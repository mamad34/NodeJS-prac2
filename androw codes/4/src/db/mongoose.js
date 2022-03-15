const mongoose = require("mongoose");
const validator = require("validator");

mongoose.connect("mongodb://127.0.0.1:27017/task-manager-api", {
  useNewUrlParser: true,
  // useCreateIndex: true,
});

const User = mongoose.model("User", {
  name: {
    type: String, // name is required
    required: true,
    trim: true, // trim will remove any spaces before and after the string
  },
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
    validate(value) {
      // npm i validator
      if (!validator.isEmail(value)) {
        throw new Error("Email is not valid!");
      }
    },
  },
  age: {
    type: Number, // age is optional
    default: 0,
    validate(value) {
      if (value < 0) {
        throw new Error("Age must be a postive number");
      }
    },
  },
  password: {
    type: String,
    trim: true,
    minLength: 7,
    required: true,
    validate(value) {
      if (value.toLowerCase().includes("password")) {
        throw new Error("PASSWORD should not contain 'password' ");
      }

      // if (value < 6) {
      //   throw new Error("Password must be grater than 6");
      // } else if (value.includes("password")) {
      //   throw new Error("PASSWORD should not contain password");
      // }
    },
  },
});

// const me = new User({
//   name: "       Mamad         ",
//   // age: -1,
//   email: "     hoya@oyea.com       ",
//   password: "iphone6s!",
// });

// me.save()
//   .then((me) => {
//     console.log(me);
//   })
//   .catch((error) => {
//     console.log("Error", error);
//   });

const Tasks = mongoose.model("Tasks", {
  description: {
    type: String,
    trim: true,
    required: true,
  },
  completed: { type: Boolean, default: false },
});

const task = new Tasks({
  description: "Some BS description to do ",
});

task
  .save()
  .then((task) => {
    console.log(task);
  })
  .catch((err) => {
    console.log(err);
  });
