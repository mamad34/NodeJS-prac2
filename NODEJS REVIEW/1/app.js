// const fs = require("fs");

// fs.writeFileSync("note.txt", "can i get a hoyaaaaa");

// const add = require("./utils");
// const name = require("./utils");

// console.log(name);

// const sum = add(1, 1);
// console.log(sum);
// const validator = require("validator");
// console.log(chalk.green.bold.inverse("FUCK YOU"));
// console.log(process.argv[2]);
// if (command === "add") {
//     console.log("Adding note");
// } else if (command === "remove") {
//     console.log("Removing a note");
// }

const { default: chalk } = require("chalk");
const { argv } = require("yargs");
const yargs = require("yargs");
const notes = require("./notes");

yargs.version("85");

yargs.command({
    command: "remove",
    describe: "Remove a note",
    builder: {
        title: {
            describe: "Note title",
            type: "string",
            demandOption: true,
        },
    },
    handler(argv) {
        console.log("pussy");
        notes.removeNote(argv.title);
    },
});

yargs.command({
    command: "add",
    describe: "Add a new note",
    builder: {
        title: {
            describe: "Note title",
            demandOption: true,
            type: "string",
        },
        body: {
            describe: "Note body",
            demandOption: true,
            type: "string",
        },
    },
    handler: function(argv) {
        notes.addNote(argv.title, argv.body);
    },
});

yargs.command({
    command: "list",
    describe: "list the notes",
    handler() {
        notes.listNotes();
    },
});

yargs.command({
    command: "read",
    describe: "read the notes",
    builder: {
        title: {
            describe: "Note title",
            demandOption: true,
            type: "string",
        },
    },
    handler(argv) {
        notes.readNote(argv.title);
    },
});

yargs.parse();
// console.log(yargs.argv);