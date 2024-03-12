var validator = require('validator');   
var chalk = require('chalk');


const val=validator.isEmail('deadlock@gmai.com'); //=> true
console.log(chalk.yellow.inverse(val));
console.log(chalk.red.inverse('Hello world! good morning'));
