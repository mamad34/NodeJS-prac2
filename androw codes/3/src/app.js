const express = require("express");

const app = express();

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

app.get("/weather", (req, res) => {
  res.send({
    location: "Philadelphia",
    forcast: "This is 6C dgree & sunny",
  });
});

app.listen(3000, () => {
  console.log("Server Started");
});
