var chalk = require('chalk');
var fs = require('fs');

function showDirectory(str){
	done(process.cwd());
}
function showDate(str){
	done(new Date().toString());
}
function showFiles(str){
	fs.readdir('.', function(err, files){
		var list = [];
		for(var i = 0; i < files.length; i++){
			list.push(files[i]);
		}
		done(list.join('\n'));
	});
}
function echo(str){
	if(str[0] === '$PATH'){
		done(process.env.PATH);
	}
	else{
		done(str.join(' '));
	}
}
function cat(str){
	// process.stdout.write(chalk.green(fs.readFile('./' + str[0]).toString()));
	fs.readFile('./' + str[0], function(err, data){
		if(err){
			throw err;
		}
		done(data.toString());
	})
}
function head(str, num){
	fs.readFile('./' + str[0], function(err, data){
		if(err){
			throw err;
		}
		var lines = data.toString().split('\n');
		var result = [];
		for(var i = 0; i < num; i++){
			result.push(lines[i]);
		}
		done(result.join('\n'));
	})
}
function tail(str, num){
	fs.readFile('./' + str[0], function(err, data){
		if(err){
			throw err;
		}
		var lines = data.toString().split('\n');
		var result = [];
		for(var i = lines.length - num; i < lines.length; i++){
			result.push(lines[i]);
		}
		done(result.join('\n'));
	})
}
function done(output){
	process.stdout.write(chalk.green(output));
	process.stdout.write(chalk.yellow('\nmy_prompt: '));
}
module.exports = {showDirectory:showDirectory,
	showDate:showDate,
	showFiles:showFiles,
	echo: echo,
	cat: cat,
	head: head,
	tail: tail,
	done: done};