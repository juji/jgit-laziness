var shell = require('shelljs');

if (shell.exec('git add .').code !== 0) {
 shell. echo('Error: Git add failed');
  shell.exit(1);
}

shell.exec('git commit -am '+global.COMMITMSSG);