const addNote = (title, body) => {
	console.log("Adding Note", title, body);
};

const getAll = () => {
	console.log("Fetching all notes");
};

const readNote = () => {
	console.log("Getting note");
};
const removeNote = () => {
	console.log("Note Deleted");
};


module.exports = {
	addNote,
    getAll,
    readNote,
    removeNote
};
