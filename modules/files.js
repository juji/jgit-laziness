var shell = require('shelljs');

if (shell.exec('git ls-files').code !== 0) {
  shell.echo('Error: Git ls-files failed');
  shell.exit(1);
}