var shell = require('shelljs');

require('./commit.js');

if (shell.exec('git push').code !== 0) {
  shell.echo('Error: Git push failed');
  shell.exit(1);
}