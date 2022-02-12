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
/*
const url =
  "https://api.weatherapi.com/v1/forecast.json?key=122473ea8c4b4cec923164030220402&q=Tehran&days=1&aqi=yes&alerts=no&lang=ar";

request({ url: url, json: true }, (error, response) => {
  // const data = JSON.parse(response.body); // with json : true no neet to parse it
  // console.log(data.current);
  if (error) {
    console.log("Some Error happend");
  } else if (response.body.error) {
    console.log("Unable to find location ");
  } else {
    console.log(
      ` the weather of ${response.body.location.name} is ${response.body.current.condition.text} & the degree is : ${response.body.current.temp_c}C`
    );
    console.log(
      "The max temp will be : " +
        response.body.forecast.forecastday[0].day.maxtemp_c
    );
  }
});

const url2 =
  "https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoibW9odGhyIiwiYSI6ImNremEweWUyZzBjc2cybnMyZXUwZXh0d3YifQ.uOQibBXXa4HID9MZWlF9sA&limit=1";

request({ url: url2, json: true }, (error, response) => {
  if (error) {
    console.log("Error in get map box api");
  } else if (response.body.error) {
    console.log("Unable to find correct info");
  } else if (response.body.message) {
    console.log("there was an error :", response.body.message);
  } else {
    console.log("The lat of LA is : " + response.body.features[0].center[0]);
    console.log("The lon of LA is : " + response.body.features[0].center[1]);
  }
});
*/
const geocode = require("./utils/geocode");
const forecast = require("./utils/forcast");
const yargs = require("yargs");

console.log("the city name of user :  " + yargs.argv);
console.log(yargs.argv._[0]);
const cityOfUser = yargs.argv._[0];
if (cityOfUser) {
  geocode(cityOfUser, (error, { latitude, longitude, location }) => {
    if (error) {
      return console.log(error);
    }
    // console.log("Error : ", error);
    // console.log("Data : ", data);
    forecast(latitude, longitude, (error, forecastData) => {
      if (error) {
        return console.log(error);
      }
      console.log(location);
      console.log(forecastData);
      // console.log("Error", error);
      // console.log("Data", data);
    });
  });
} else {
  console.log("insert a valid city");
}
