const express = require("express");
const path = require("path");

console.log(__dirname);
console.log(path.join(__dirname, "../public"));

const app = express();
const publicDir = path.join(__dirname, "../public");
const viewsPath = path.join(__dirname, "../src/templates");
app.set("view engine", "hbs");
app.set("views", viewsPath);
app.use(express.static(publicDir));
app.get("", (req, res) => {
    res.render("index", {
        title: "Weather App",
        name: "Mamad",
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
        helptext: "you can get help mf ",
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