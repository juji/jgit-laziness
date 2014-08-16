var shell = require('shelljs');

if (shell.exec('git add .').code !== 0) {
 shell. echo('Error: Git add failed');
  shell.exit(1);
}

if (shell.exec('git commit -am '+global.COMMITMSSG).code !== 0) {
  shell.echo('Error: Git commit failed');
  shell.exit(1);
}