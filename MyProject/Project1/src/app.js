const genius = require("genius-lyrics-api");
const express = require("express");
const path = require("path");
const hbs = require("hbs");
const bodyParser = require("body-parser");

const app = express();
viewPath = path.join(__dirname, "../public");
console.log(viewPath);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(viewPath));
app.set("view engine", "hbs");
app.set("views", viewPath);

// nodemon app.js -e js,hbs

// genius.getLyrics(options).then((lyrics) => console.log(lyrics));

app.get("", (req, res) => {
  res.render("index");
});

app.post("/get-lyrics", async (req, res) => {
  // console.log("params", req);
  try {
    const title = req.body.user.title;
    const artist = req.body.user.artist;

    // console.log(req.body);
    const options = {
      apiKey:
        "9xmM-7XS7KK6bYcBUOMvKlEjqSaEy4ladmm8NmdsEGJCu6xCeS5Aa6djxm69Kh9k",
      title,
      artist,
      optimizeQuery: true,
    };

    const lyric = await genius.getLyrics(options);

    res.send(lyric);
    // res.render("get-lyrics");
  } catch (error) {
    console.log("err", error);
  }
  // res.render("index");
});

app.get("/help", (req, res) => {
  res.render("help");
});

app.get("/about", (req, res) => {
  res.render("about");
});

app.listen(3000, () => {
  console.log("Server Started");
});
