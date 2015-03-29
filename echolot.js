var recursive 	= require("recursive-readdir");
var async 		= require("async");
var fs 			= require("fs");
var fse 		= require("fs-extra");
var path 		= require("path");

if (typeof String.prototype.endsWith !== "function") {
    String.prototype.endsWith = function(suffix) {
        return this.indexOf(suffix, this.length - suffix.length) !== -1;
    };
}

// RUN
var run = function(startDir, callback) {

	// define files to ignore
	var ignoreFiles = ["*.js", "*.html", "*.txt", "*.png", "*.jpg", ".css", "*.htm", "*.php", ".jpeg", "*.gif", ".DS_Store", ".gitignore", ".npmignore", "LICENSE", "README*"];


	if(startDir.indexOf("/") == startDir.length - 1) {
		startDir = startDir.substr(0, startDir.length - 2);
	}

	startDir = path.resolve(__dirname, startDir);

	var out = "processes";

	// find process files in folder
	recursive(startDir, ignoreFiles, function (err, files) {

		if(err) throw err;

		// files is an array of filename 
		async.map(files, function(file, done) {

			if(!file.endsWith(".json")) return done(null, []);

			// open file
			fs.readFile(file, function (err, data) {

				if(err) return done(null, []);
				
				// check if data buffer is sufficient
				if(data && data.length > 0) {

					// parse json from file
					var parsed = JSON.parse(data.toString());
					
					// check if it has a "apps" property
					if(parsed.apps) {

						// return all the apps declarations
						return done(null, parsed.apps);
					}
					else {
						return done(null, []);
					}
				}

				return done(null, []);
			});

		}, 

		// merge the results array together
		function(err, results) {

			var apps = [];
			for(var i in results) {
				if(results[i].length > 0) {
					for(var j in results[i]) {
						apps.push(results[i][j]);
					}
				}
			}

			var result = {
				"apps": apps 
			};

			var outFile = startDir + "/" + out + ".json";

			// check if file exists and if so, create backup
			fs.exists(outFile, function (exists) {
				
				if(exists) {
					var backupFile = startDir + "/" + out + "_" + new Date().toISOString() + ".json";
					fse.copySync(outFile, backupFile);
				}

				// write result json
				fs.writeFile(outFile, JSON.stringify(result, null, "\t"), function (err) {
					if (err) throw err;


					console.log("\x1b[32m", "Done, check '" + outFile + "'!" ,"\x1b[0m");
					if(callback) return callback();
				});
			});
		});
	});
};

module.exports = {
	"run": run
}