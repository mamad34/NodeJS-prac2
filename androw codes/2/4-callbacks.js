setTimeout(() => {
  console.log("two sec");
}, 2000);

const names = ["abdol", "gholghol", "bolbol"];
const shortNames = names.filter((name) => {
  return name.length <= 4;
});

// with no call back

const pitico = () => {
  setTimeout(() => {
    const data = {
      f: "f",
      u: "u",
    };
    console.log("Fuck");
    return data;
  }, 3000);
};

setTimeout(() => {
  const runPitico = pitico();
  console.log(runPitico);
}, 6000);
// console.log(runPitico);

const geocode = (address, callback) => {
  setTimeout(() => {
    const data = {
      latitude: 0,
      longitude: 0,
    };
    callback(data);
  }, 2000);
};

geocode("Philadelphia", (data2) => {
  console.log(data2);
});

/*
two sec
{ latitude: 0, longitude: 0 }
undefined
Fuck
*/

// Goal: Mess around with the callback pattern
//
// 1. Define an add function that accepts the correct arguments
// 2. Use setTimeout to simulate a 2 second delay
// 3. After 2 seconds are up, call the callback function with the sum
// 4. Test your work!

const add = (x, y, callback) => {
  setTimeout(() => {
    callback(x + y);
  }, 2000);
};

add(1, 4, (sum) => {
  console.log(sum); // Should print: 5
});

const users = ["johnny", "rock", "blesar"];

function addUser(username) {
  setTimeout(() => {
    users.push(username);
  }, 2000);
}

function getUser() {
  setTimeout(() => {
    console.log(users);
  }, 1000);
}

addUser("New User");
getUser();

//////////////////////

const users2 = ["a", "b", "c"];

function addUser2(username, callback) {
  setTimeout(() => {
    users2.push(username);
    callback();
  }, 10000);
}

function getUser2() {
  setTimeout(() => {
    console.log(users2);
  }, 1000);
}

addUser2("Mamad", getUser2);
