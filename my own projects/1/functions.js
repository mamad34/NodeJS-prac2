const name = "johnny";
const age = 7;
function writeNote() {
  return `My name is ${name} & i am ${age} yearsold`;
}

const theAppendNote = (lastName, rate) => {
  lastName += "*";
  rate += 5;

  return `And my last name is ${lastName} & my rate in ph is ${rate++}`;
};

module.exports = { writeNote, theAppendNote };
// OR module.exports.theAppendNote = theAppendNote;
