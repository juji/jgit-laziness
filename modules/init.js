var shell = require('shelljs');

require('./commit.js');
shell.exec('git push --set-upstream origin master');
