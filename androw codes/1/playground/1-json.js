const fs = require("fs");
// const book = {
//   title: "Egoh is the Enemy",
//   author: "Ryan Holiday",
// };

// const bookJSON = JSON.stringify(book);
// console.log(bookJSON);
// fs.writeFileSync("1-json.json", bookJSON );

// const parsedData = JSON.parse(bookJSON);
// console.log(parsedData);
// console.log(parsedData.author);

// const dataBuffer = fs.readFileSync("1-json.json");
// // console.log(dataBuffer);
// // console.log("                    ");
// // console.log(dataBuffer.toString());
// const dataJSON = dataBuffer.toString();
// const data = JSON.parse(dataJSON);
// console.log(data.title);

// Challenge

const dataBuffer = fs.readFileSync("1-json.json");
console.log(dataBuffer);
const dataJSON = dataBuffer.toString();
console.log(dataJSON);
const data = JSON.parse(dataJSON);
console.log(data);
data.name = "mamad";
data.age = 23;
console.log(data);
fs.writeFileSync("1-json.json", JSON.stringify(data));
