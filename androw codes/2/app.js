// console.log("Starting");

// setTimeout(() => {
//   console.log("2 second timer");
// }, 2000);

// setTimeout(() => {
//   console.log("0 second timer");
// }, 0);

// console.log("Stopping");

// npm i request
// npm init -y yes to all

const request = require("request");

const url =
  "https://api.weatherapi.com/v1/forecast.json?key=122473ea8c4b4cec923164030220402&q=Tehran&days=1&aqi=yes&alerts=no&lang=ar";

request({ url: url, json: true }, (error, response) => {
  // const data = JSON.parse(response.body); // with json : true no neet to parse it
  // console.log(data.current);
  console.log(
    ` the weather of ${response.body.location.name} is ${response.body.current.condition.text} & the degree is : ${response.body.current.temp_c}C`
  );
  console.log(
    "The max temp will be : " +
      response.body.forecast.forecastday[0].day.maxtemp_c
  );
});
