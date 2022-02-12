// Using http instead of Request

const { error } = require("console");
const https = require("https");

const url = `https://api.openweathermap.org/geo/1.0/reverse?lat=75&lon=85&limit=5&appid=fcd73a3597bfd2d1e0a7bf76a147a393`;

const requset = https.request(url, (response) => {
  let DATA = "";
  // data is an event name but AS a String
  response.on("data", (chunk) => {
    DATA += chunk.toString();
    console.log("The chunk", chunk);
  });
  response.on("end", () => {
    console.log("The DATA", DATA);
    const body = JSON.parse(DATA);
    console.log(body);
  });
});

requset.on("error", (error) => {
  console.log("Errrrror ", error);
});

requset.end();
