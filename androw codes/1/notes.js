const fs = require("fs");
const { CLIENT_RENEG_LIMIT } = require("tls");

const getNotes = () => {
  return "Your notes...";
};

const addNote = (title, body) => {
  const notes = loadNotes();

  const duplicateNotes = notes.filter((note) => note.title === title); // filtes searches throw all the array

  const duplicateNote = notes.find((note) => note.title === title); // find will stop after first match

  // debugger;

  if (!duplicateNote) {
    notes.push({
      title: title,
      body: body,
    });
    saveNotes(notes);
    console.log("New note added");
  } else {
    console.log("Note title taken");
  }
};

const saveNotes = (notes) => {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync("notes.json", dataJSON);
};

const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync("notes.json");
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (e) {
    return [];
  }
};

const removeNote = (title) => {
  const notes = loadNotes();
  console.log(notes);
  const noteToRemove = notes.filter((note) => note.title !== title);
  if (notes.length > noteToRemove.length) {
    console.log("Note Removed");
  } else {
    console.log("No Note Found");
  }
  saveNotes(noteToRemove);
};

const listNotes = () => {
  const notes = loadNotes();
  console.log("YOUR NOTES");
  notes.forEach((note) => {
    console.log(note.title);
  });
};

const readNotes = (title) => {
  const notes = loadNotes();
  const foundedNote = notes.find((note) => inote.title === title);
  if (foundedNote) {
    console.log("the note that we found is :".toUpperCase());
    console.log(foundedNote);
  } else {
    console.log("the item dose not found");
  }
};

module.exports = {
  getNotes: getNotes,
  addnote: addNote,
  removeNote: removeNote,
  listNotes: listNotes,
  readNotes: readNotes,
};
