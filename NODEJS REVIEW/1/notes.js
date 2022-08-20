const { default: chalk } = require("chalk");
const fs = require("fs");

const removeNote = function(title) {
    const notes = loadNotes();
    const match = notes.filter(function(note) {
        if (note.title !== title) {
            return note;
        }
    });
    console.log("dick", match);
    saveNotes(match);
};

const addNote = function(title, body) {
    const notes = loadNotes();
    const duplicateNotes = notes.filter(function(note) {
        return note.title === title;
    });

    if (duplicateNotes.length === 0) {
        notes.push({
            title: title,
            body: body,
        });
        saveNotes(notes);
        console.log("new note added");
    } else {
        console.log("Note title taken");
    }
};
const listNotes = function() {
    const allNotes = loadNotes();
    allNotes.forEach((note) => {
        console.log(note);
    });
};

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync("notes.json", dataJSON);
};

const readNote = (title) => {
    const notes = loadNotes();
    const note = notes.find((note) => note.title === title);
    if (note) {
        console.log(chalk.inverse(note.title));
        console.log(note.body);
    } else {
        console.log(chalk.red.inverse("NOTE NOT FOUND"));
    }
};
const loadNotes = () => {
    try {
        const buffer = fs.readFileSync("notes.json");
        const dataJSON = buffer.toString();
        return JSON.parse(dataJSON);
    } catch (e) {
        return [];
    }
};

module.exports = {
    readNote: readNote,
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
};