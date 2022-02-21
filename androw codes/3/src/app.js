const path = require("path");
const express = require("express");
const hbs = require("hbs");

console.log(__dirname);
console.log(__filename);
console.log(path.join(__dirname, "../public"));

const app = express();

// define paths for express config
const publicDirectory = path.join(__dirname, "../public");
const viewsDirectory = path.join(__dirname, "../templates/views");
const partialsPath = path.join(__dirname, "../templates/partials");

// this line is using template folder and set it as the views folder of view engings like hbs
app.set("views", viewsDirectory);

// set alows you to set a value for a express setting
// this line will setup handelbars
app.set("view engine", "hbs");

// setting partials path for handelbars
// nodemon src/app.js -e js,hbs // tell nodemon that restart when we save hbs & js files
hbs.registerPartials(partialsPath);

// For now app.use() is a way to customize out server
// in section 047 npm i hbs
//Setup static directory to serve // now public dir is serving css and js files
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
    title: "Help",
    name: "Androw",
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

app.get("/help/*", (req, res) => {
  res.render("404", {
    title: "Help article not found",
    name: "Mamad Mead",
  });
});

// Setting Up the 404 Page // * means anything that hasent match so far
app.get("*", (req, res) => {
  res.render("404", {
    title: "Page Not Found 404",
    name: "Mamad Mead",
  });
});

app.listen(3000, () => {
  console.log("Server Started");
});
