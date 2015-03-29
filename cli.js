#!/usr/bin/env node

'use strict';

var echolot = require("./echolot");

var args = process.argv;

if(args.length <= 2) {
	throw "not enough arguments: echolot ./startDir";
}

// get the start directory from parameters
var startDir = args[2];

// run echolot
echolot.run(startDir);