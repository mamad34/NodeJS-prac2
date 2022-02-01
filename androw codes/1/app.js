/*
// first section
const fs = require("fs");

fs.writeFileSync("notes.txt", "My name is johnny sins .");

//challenge
fs.appendFileSync("notes.txt", "this is added by append");

*/

// second section
/*
const add = require("./utils.js");

const sum = add(4, -2);

console.log(sum);

// challenge

const getNotes = require("./notes");

console.log(getNotes());

*/

// third section

// cmd => npm init
// // npm install validator

// const validator = require("validator");

// console.log(validator.isEmail("test@example.com"));
// console.log(validator.isEmail("example.com"));
// console.log(validator.isURL("https://apple.com"));
// console.log(validator.isURL("htps://apple.com"));

// if node_modules removed => npm install

// import chalk from "chalk";

// const { chalk } = require("chalk"); *

// import { chalk } from "chalk";

// console.log(chalk.green("Success!"));

//***********************************//
// Start of Season 4
//***********************************//

const { command, demandOption, argv } = require("yargs");
const yargs = require("yargs");
const notes = require("./notes.js");

// Customize yargs version

console.log(argv);

yargs.version("85.85.85");

// Create add command

yargs.command({
  command: "add",
  describe: "Add a new note",
  builder: {
    title: {
      describe: "Note Title",
      demandOption: true,
      type: "string",
    },
    body: {
      describe: "Note body ",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    notes.addnote(argv.title, argv.body);
    console.log(" hi bitch ");
  },
});

// Create remove command

yargs.command({
  command: "remove",
  describe: "remove a note ",
  builder: {
    title: {
      describe: "remove a note from title",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    notes.removeNote(argv.title);
  },
});

yargs.command({
  command: "list",
  describe: "listing some items",
  handler() {
    notes.listNotes();
  },
});

yargs.command({
  command: "read",
  describe: "read some content of a file",
  title: {
    describe: "read the content of a file",
    demandOption: true,
    type: "string",
  },
  handler(argv) {
    notes.readNotes(argv.title);
  },
});

// console.log(process.argv);

// console.log(yargs.argv);
// instead of using above clg we van use :
yargs.parse();

// npm install yargs
