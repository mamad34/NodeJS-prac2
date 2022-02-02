const fs = require("fs");

const addNote = (title) => {
  loadNotes();
};

const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync("text.json");
    console.log(dataBuffer);
    const dataInJSON = dataBuffer.toString();
    console.log(dataInJSON);
    const dataInObject = JSON.parse(dataInJSON);
    console.log(dataInObject);
  } catch (e) {
    console.log("EROOOOOR", e);
  }
};

module.exports = {
  addNote: addNote,
};
