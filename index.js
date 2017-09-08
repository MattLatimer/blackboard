var chalk = require("chalk");

var message = 'There are ' + chalk.blueBright.bold('2') + ' ' + chalk.red.underline('hard problems') +
' in ' + chalk.yellowBright('computer science') + ': ' + chalk.green('cache invalidation') + ', ' +
chalk.magenta('naming things') + ', and ' + chalk.cyan('off-by-1 errors.');

console.log(message);