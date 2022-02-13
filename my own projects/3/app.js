const yargs = require("yargs");

const getLatLon = require("./getlatlon");

const ip = yargs.argv._[0];

console.log(yargs.argv._[0]);

if (ip) {
  const geoLocation = getLatLon(ip, (error, response) => {
    if (error) {
      console.log(error, response);
    } else {
      console.log(response);
    }
  });
} else {
  console.log("ERROR IP was:", ip);
}
