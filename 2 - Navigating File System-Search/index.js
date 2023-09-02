//For the purpose of this exercise, same content means dup files.
const walk = require("walk");
const path = require("path");

const fileNameSizeCount = {};
// {size: path}
//we find same thing by filesize

const options = {
	listeners: {
		names: function (root, nodeNamesArray) {
			nodeNamesArray.sort(function (a, b) {
				if (a > b) return 1;
				if (a < b) return -1;
				return 0;
			});
		},
		file: function (root, fileStats, next) {
			const name = fileStats.name;
			const size = fileStats.size;
			const p = path.join(__dirname, root.slice(2), name);

			if (size in fileNameSizeCount) {
				console.log("\n");
				console.log("\x1b[33m%s\x1b[0m", `Potential duplicate found`);
				console.log(p);
				console.log(fileNameSizeCount[size]);
				console.log("\n");
			} else {
				fileNameSizeCount[size] = p;
			}

			next();
		},
	},
};

walk.walkSync("./", options);
console.log("AL SET BABY!");

///__dirname, nodejs that gives us current directory we are in
// root is where it is currently navigating to
