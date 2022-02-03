const yargs = require("yargs");
const notes = require("./notes");
yargs.version("69.6.9");

yargs.command({
  command: "add",
  describe: "this function will add a new note",
  builder: {
    title: {
      describe: "TITLE OF THE NOTE",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    console.log(argv.title);
    notes.addNote(argv.title);
  },
});

yargs.command({
  command: "remove",
  describe: "this function will remove a note",
  builder: {
    title: {
      describe: "TITLE OF THE NOTE",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    console.log(argv.title);
    notes.removeNote(argv.title);
  },
});

yargs.parse();
// console.log(yargs.argv);
