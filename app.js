const fs = require("fs");
const os = require("os");
const _ = require("lodash");
const notes = require("./notes");
const yargs = require("yargs");
// var user = os.userInfo();
// fs.appendFile("greetings.txt", "Hello World!!", err => {
// 	if (err) {
// 		console.log("Unable to write to the file");
// 	}
// 	console.log(`Hello ${user.username.toUpperCase()}`);
// });
// var res = notes.addNote(3, 5);
// console.log(res);

// var users = ["Akshay", "Akshay", "Akshay", "Doe"];
// var filterdUsers = _.uniq(users);
// console.log(filterdUsers);

const argv = yargs.argv;
const command = process.argv[2];
if (command === "add") {
	notes.addNote(argv.title, argv.body);
} else if (command === "list") {
	notes.getAll();
} else if (command === "read") {
	notes.readNote(argv.title);
} else if (command === "delete") {
	notes.removeNote(argv.title);
} else {
	console.log("Command Not Recognised");
}
