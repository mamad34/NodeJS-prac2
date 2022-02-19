const path = require("path");
const express = require("express");

console.log(__dirname);
console.log(__filename);
console.log(path.join(__dirname, "../public"));

const app = express();

const publicDirectory = path.join(__dirname, "../public");

// set alows you to set a value for a express setting
// this line will setup handelbars
app.set("view engine", "hbs");

// For now app.use() is a way to customize out server
// in section 047 npm i hbs
app.use(express.static(publicDirectory));

app.get("", (req, res) => {
  // render use for sendig views like hbs
  // index is -> index.hbs / automaticly it will go to views folder
  // second arg is what we want to pass to hbs
  res.render("index", {
    title: "Weather App",
    name: "Androw Mead",
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
  });
});
/*
app.get("", (req, res) => {
  res.send("<h1>Hello Express</h1>");
});

app.get("/help", (req, res) => {
  res.send([
    {
      name: "Androw",
    },
    {
      age: 27,
    },
  ]);
});

app.get("/about", (req, res) => {
  res.send("<h2> This is the About page </h2>");
});
*/

app.get("/weather", (req, res) => {
  res.send({
    location: "Philadelphia",
    forcast: "This is 6C dgree & sunny",
  });
});

app.listen(3000, () => {
  console.log("Server Started");
});
