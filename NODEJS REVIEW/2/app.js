const request = require("request");
const geocode = require("./utils/geocode");

// const city = "Tehran";
// let lat, lon;
// const latLonURl = `http://api.openweathermap.org/geo/1.0/direct?q=${city}&etric&appid=fcd73a3597bfd2d1e0a7bf76a147a393`;

// request({ url: latLonURl, json: true }, (error, response) => {
//     if (error) {
//         console.log("Unable to connect to weather service");
//     } else if (response.body.cod === 400) {
//         console.log("could not find the city");
//     } else if (response.body.cod === 401) {
//         console.log("API FUCKED UP");
//     } else {
//         console.log(response.body[0].name);
//         lat = response.body[0].lat;
//         lon = response.body[0].lon;
//         console.log("lat is " + lat);
//         console.log("lon is " + lon);
//     }
// });

// const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=hourly,daily&units=metric&appid=fcd73a3597bfd2d1e0a7bf76a147a393`;
// request({ url: url, json: true }, (error, response) => {
//     if (error) {
//         console.log("Error while getting data");
//     } else if (response.body.cod === 400) {
//         console.log("could not find the city");
//     } else {
//         console.log(response.body);
//     }
// });

const city = process.argv[2];
console.log(city);
if (city === undefined) {
    console.log("please INSERT a city");
} else {
    geocode.geocode(city, (error, data) => {
        if (error) {
            return console.log(ERROR, "error");
        } else {
            lat = data.body[0].lat;
            lon = data.body[0].lon;
            console.log("lat is " + lat);
            console.log("lon is " + lon);
            geocode.forcast(lat, lon, (error, forcastData) => {
                if (error) {
                    return console.log("ERROR", error);
                } else {
                    console.log("CITY", data.body[0].name);
                    console.log("COUNTRY", data.body[0].country);
                    console.log(
                        "FORCAST DATA" +
                        "TEMP IS : " +
                        forcastData.current.temp +
                        " in " +
                        forcastData.timezone
                    );
                }
            });
        }
    });
}