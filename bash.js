process.stdout.write('my_prompt: ');

// The stdin 'data' event fires after a user types in a line
process.stdin.on('data', function (data) {
  var cmd = data.toString().trim(); // remove the newline
  if(cmd==='pwd'){
  	//process.stdout.write(__dirname);
  	process.stdout.write(process.cwd());
  }
  if(cmd==='date'){
  	process.stdout.write(new Date().toString());
  }
  process.stdout.write('\nmy_prompt: ');

});