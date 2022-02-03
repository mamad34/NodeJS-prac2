const fs = require("fs");

const addNote = (title) => {
  const notes = loadNotes();

  const doublicatedNote = notes.find((note) => note.title === title);

  if (!doublicatedNote) {
    console.log("the notes", notes);
    notes.push({
      title: title,
      text: "this is a custom text :)",
    });
    console.log("notes after pushing :", notes);
    saveNotes(notes);
    console.log("New note Added ");
  } else {
    console.log("Note title was taken before");
  }
};

const saveNotes = (notes) => {
  console.log(notes);
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync("text.json", dataJSON);
};

const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync("text.json");
    console.log(dataBuffer);
    const dataInJSON = dataBuffer.toString();
    console.log(dataInJSON);
    const dataInObject = JSON.parse(dataInJSON);
    console.log(dataInObject);
    return dataInObject;
  } catch (e) {
    return [];
  }
};

const removeNote = (title) => {
  const notes = loadNotes();

  const noteToRemove = notes.filter((note) => note.title !== title);
  notes.length > noteToRemove.length
    ? console.log("Note Removed")
    : console.log("note not found");
  saveNotes(noteToRemove);
};

module.exports = {
  addNote: addNote,
  removeNote: removeNote,
};
