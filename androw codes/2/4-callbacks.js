setTimeout(() => {
  console.log("two sec");
}, 2000);

const names = ["abdol", "gholghol", "bolbol"];
const shortNames = names.filter((name) => {
  return name.length <= 4;
});

// with no call back

const pitico = (address, cb) => {
  setTimeout(() => {
    const data = {
      f: "f",
      u: "u",
    };
    return data;
  }, 3000);
};

setTimeout(() => {
  const runPitico = pitico("ho yea");
  console.log(runPitico);
}, 3001);
// console.log(runPitico);

const geocode = (address, callback) => {
  setTimeout(() => {
    const data = {
      latitude: 0,
      longitude: 0,
    };
    callback(data);
  }, 1999);
};

geocode("Philadelphia", (data2) => {
  console.log(data2);
});
