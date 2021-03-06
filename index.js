#!/usr/bin/env node

var shell = require('shelljs');

function printHelp(){
	console.log('');
	console.log('	 jgit Usage');
	console.log('	 ==============================================');
	console.log('');
	console.log('	 jgit init');
	console.log('	 	 Will add, commit and perform inital push');
	console.log('');
	console.log('	 jgit commit');
	console.log('	 	 Will add and commit');
	console.log('');
	console.log('	 jgit push');
	console.log('	 jgit push "commit message"');
	console.log('');
	console.log("		 Will add, commit, and push to 'origin'");
	console.log('');
	console.log('	 jgit tracked');
	console.log("		 Will list all tracked files");
	console.log('');
	console.log('	 jgit files');
	console.log("		 Will list all files");
	console.log('');
	console.log('	 jgit help');
	console.log("		 Print this help content");
	console.log('');
	process.exit();
}

if (!shell.which('git')) {
  shell.echo('Sorry, this script requires git');
  shell.exit(1);
}

if(process.argv.length<3){

	printHelp();

}else if(process.argv[2]=='init'){

	global.COMMITMSSG = "auto-commit";
	if(typeof process.argv[3] != 'undefined') global.COMMITMSSG = process.argv[3];
	require('./modules/init.js');

}else if(process.argv[2]=='commit'){

	global.COMMITMSSG = "auto-commit";
	if(typeof process.argv[3] != 'undefined') global.COMMITMSSG = process.argv[3];
	require('./modules/commit.js');

}else if(process.argv[2]=='push'){

	global.COMMITMSSG = "auto-commit";
	if(typeof process.argv[3] != 'undefined') global.COMMITMSSG = process.argv[3];
	require('./modules/push.js');

}else if(process.argv[2]=='tracked'){

	require('./modules/tracked.js');

}else if(process.argv[2]=='files'){

	require('./modules/files.js');

}else if(process.argv[2]=='help'){

	printHelp();

}else{

	printHelp();

}
