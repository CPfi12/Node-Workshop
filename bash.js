var chalk = require('chalk');
var command = require('./command.js');

process.stdout.write(chalk.yellow('my_prompt: '));
process.stdin.on('data', function (data) {
  var cmd = data.toString().trim().split(' '); // remove the newline and split into array
  if(cmd[0]==='pwd'){
  	command.showDirectory();
  }
  if(cmd[0]==='ls'){
  	command.showFiles();
  }
  if(cmd[0]==='echo'){
  	command.echo(cmd.slice(1));
  }
  if(cmd[0] === 'cat'){
  	command.cat(cmd.slice(1));
  }
  if(cmd[0] === 'head'){
  	command.head(cmd.slice(1), 5);
  }
  if(cmd[0] === 'tail'){
  	command.tail(cmd.slice(1), 5);
  }
  else if(cmd[0]==='date'){
  	command.showDate();
  } 

});




/*else{
  	process.stdout.write(cmd.split(" ").slice(1).join(" "));
  }*/