const express = require("express");
const path = require("path");
const hbs = require("hbs");

const app = express();

const publicDir = path.join(__dirname, "../public");
const viewsDir = path.join(__dirname, "../templates/views");
const partialDir = path.join(__dirname, "../templates/partials");

app.set("views", viewsDir);
app.set("view engine", "hbs");
hbs.registerPartials(partialDir);
app.use(express.static(publicDir));

app.get("", (req, res) => {
  res.render("index", {
    title: "Weather App",
    name: "Mamad Ho Yea",
  });
});

app.get("/about", (req, res) => {
  res.render("about", {
    title: "About Me",
    name: "Androw Mead",
  });
});

app.get("/help", (req, res) => {
  res.render("help", {
    helpMessage: "This is Help page",
    title: "Help",
    name: "Androw",
  });
});

app.get("*", (req, res) => {
  res.render("404", {
    title: "Page Not Found 404",
    name: "Mamad Mead",
  });
});

app.listen(3000, () => {
  console.log("Server Started on port 3000");
});
