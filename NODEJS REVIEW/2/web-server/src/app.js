const express = require("express");
const path = require("path");
const hbs = require("hbs");
const { forcast, geocode } = require("./utils/geocode");
const { send } = require("process");

console.log(__dirname);
console.log(path.join(__dirname, "../public"));

const app = express();
const publicDir = path.join(__dirname, "../public");
const viewsPath = path.join(__dirname, "../src/templates/views");
const partialsPath = path.join(__dirname, "../src/templates/partials");
/////////////////////////////
app.set("view engine", "hbs");
app.set("views", viewsPath);
app.use(express.static(publicDir));
hbs.registerPartials(partialsPath);
//////////////////////////////
app.get("", (req, res) => {
  res.render("index", {
    title: "Weather App",
    name: "Mamad",
  });
});

app.get("/weather", (req, res) => {
  if (!req.query.address) {
    return res.send("Error you should add an address");
  }
  geocode(req.query.address, (error, data) => {
    console.log("DATAAAAAAAAAAAAAAAAA");
    // console.log(data);
    if (error) {
      return res.send(error);
    }

    // const dick = data.body ?? "pussy";
    // console.log(dick);
    // lat = data.body.length && data.body[0].lat ? data.body[0].lat : 0;
    // lon = data.body.length && data.body[0].lon ? data.body[0].lon : 0;
    let lat = 0;
    let lon = 0;

    if (data.body.length && data.body[0].lat && data.body[0].lon) {
      lat = data.body[0].lat;
      lon = data.body[0].lon;
    }
    if (!lat && !lon) {
      res.status(502);
      return res.send({
        error: "error 502",
      });
    }
    forcast(lat, lon, (error, forcastData) => {
      if (error) {
        return res.send(error);
      }
      res.send({
        // forcast: forcastData,
        timezone: forcastData.timezone,
        weather: forcastData.current.weather[0].main,
        forcast: forcastData.current.weather[0].description,

        // description: forcastData.weather[0].description,
      });
    });
  });
});

app.get("/products", (req, res) => {
  // console.log(req.query);
  // console.log(req.query.search);
  if (!req.query.search) {
    return res.send({
      error: "You must provide a search term",
    });
  }
  res.send({
    product: [],
  });
});

app.get("/about", (req, res) => {
  res.render("about", {
    title: "about me",
    name: "ALmamad",
  });
});

app.get("/help", (req, res) => {
  res.render("help", {
    title: "help ",
    name: "mamad ",
  });
});

app.get("/help/*", (req, res) => {
  res.render("404", {
    errorMessage: "help Page not found",
  });
});

app.get("*", (req, res) => {
  res.render("404", {
    errorMessage: "404 Page not found :)",
  });
});

// app.get("", (req, res) => {
//     res.send("<h1>Hello from expres</h1>");
// });

// app.get("/help", (req, res) => {
//     res.send({
//         name: "mamad",
//         age: 27,
//     });
// });

// app.get("/about", (req, res) => {
//     res.send("about page");
// });
// app.get("/weather", (req, res) => {
//     res.send("weather page");
// });

app.listen(3000, () => {
  console.log("Server is UP on port 3000");
});
