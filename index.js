var recursive = require("recursive-readdir");
 
recursive("test", function (err, files) {

	// files is an array of filename 
	console.log(files);
});