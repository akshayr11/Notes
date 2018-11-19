const fs = require("fs");

fetchNotes = () => {
	try {
		const notesString = fs.readFileSync("notes-Data.json");
		return JSON.parse(notesString);
	} catch (error) {
		return [];
	}
};

saveNotes = notes => {
	if (notes) {
		fs.writeFileSync("notes-Data.json", JSON.stringify(notes));
	}
};

const addNote = (title, body) => {
	let notes = fetchNotes();
	const note = {
		title,
		body
	};
	var duplicateNotes = notes.findIndex(note => note.title === title);
	if (duplicateNotes !== -1) {
		return `Note with the title ${title} already exist.`;
	} else {
		notes.push(note);
		saveNotes(notes);
		return `Note with the title: ${title} created successfully.`;
	}
};

const getAll = () => {
	let notes = fetchNotes();
	if (!notes) {
		return `No Notes found`;
	} else {
		return notes;
	}
};

const readNote = (title) => {
    const notes = fetchNotes();
    var noteIndex = notes.findIndex(note => note.title === title);
    if (noteIndex === -1) {
		return `Note with the title ${title} doesn't exist.`;
	} else {
		return `Requested Note ${title}: ${notes[noteIndex].body}`;
    }
};
const removeNote = title => {
	var notes = fetchNotes();
	var noteindex = notes.findIndex(note => note.title === title);
	if (noteindex === -1) {
		return `Note with the title ${title} doesn't exist.`;
	} else {
		notes.splice(noteindex, 1);
		saveNotes(notes);
		return `Note with the title ${title} removed sucessfully.`;
	}
};

module.exports = {
	addNote,
	getAll,
	readNote,
	removeNote
};
