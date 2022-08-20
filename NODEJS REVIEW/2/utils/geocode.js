const request = require("request");
const geocode = (address, callback) => {
    const latLonURl = `http://api.openweathermap.org/geo/1.0/direct?q=${address}&etric&appid=fcd73a3597bfd2d1e0a7bf76a147a393`;
    request({ url: latLonURl, json: true }, (error, response) => {
        if (error) {
            callback("Unable to connect to weather service", undefined);
        } else if (response.body.cod === 400) {
            callback("could not find the city", undefined);
        } else if (response.body.cod === 401) {
            callback("API FUCKED UP", undefined);
        } else {
            callback(undefined, response);
        }
    });
};

const forcast = (lat, lon, callback) => {
    const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=hourly,daily&units=metric&appid=fcd73a3597bfd2d1e0a7bf76a147a393`;
    request({ url: url, json: true }, (error, { body }) => {
        if (error) {
            callback("Error while getting data", undefined);
        } else if (body.cod === 400) {
            callback("could not find the city", undefined);
        } else {
            callback(undefined, body);
        }
    });
};

module.exports = { geocode: geocode, forcast: forcast };