const { theAppendNote, writeNote } = require("./functions");

const fs = require("fs");

const validator = require("validator");

console.log(writeNote());

fs.writeFileSync("exeNote.txt", writeNote());

fs.appendFileSync("exeNote.txt", theAppendNote("Sins", 69));

console.log(validator.isEmail("dasd"));
