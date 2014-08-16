var shell = require('shelljs');

if (shell.exec('git ls-tree --full-tree -r HEAD').code !== 0) {
  shell.echo('Error: Git ls-tree failed');
  shell.exit(1);
}