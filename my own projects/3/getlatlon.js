const request = require("request");

const getLatLon = (ip, callback) => {
  const url = `http://ip-api.com/json/${ip}`;
  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback(`Error Connection ${error}`, undefined);
    } else if (body.message === "invalid query") {
      callback("Invalid query");
    } else {
      const geoLocation = {
        lat: body.lat,
        lon: body.lon,
        country: body.country,
        timezone: body.timezone,
      };
      return callback(undefined, geoLocation);
    }
  });
};

module.exports = getLatLon;
