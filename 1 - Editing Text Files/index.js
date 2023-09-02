//for editing text file sample

const fs = require("fs");

let fileString = fs.readFileSync("input.txt").toString();

//Fill out the initials
fileString = fileString.replace(/K:/g, "Kevin: ");
fileString = fileString.replace(/E:/g, "Eric: ");
//adding g replaces all instances  - g global

//add line number
const characterArray = fileString.split("");
// h e l l o
let lineNumber = 1;

for (let i = 0; i < characterArray.length; i++) {
	const prevChar = characterArray[i - 1];

	if (prevChar === "\n" || !prevChar) {
		characterArray[i] = String(lineNumber) + ". " + characterArray[i];
		lineNumber++;
	}
}

fileString = characterArray.join("");

//output generator
fs.writeFileSync("output.txt", fileString);
