const notes = require("./notes");
const yargs = require("yargs");

const argv = yargs.argv;
const command = process.argv[2];
if (command === "add") {
	const addStatus = notes.addNote(argv.title, argv.body);
	console.log(addStatus);
} else if (command === "list") {
	const NotesList = notes.getAll();
	console.log(NotesList);
} else if (command === "read") {
	const requestedNote = notes.readNote(argv.title);
	console.log(requestedNote);
} else if (command === "remove") {
	const status = notes.removeNote(argv.title);
	console.log(status);
} else {
	console.log("Command Not Recognised");
}
