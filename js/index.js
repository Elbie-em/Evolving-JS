const moment = require('moment');

console.log('Hello From JavaScript');
console.log(moment().startOf('day').fromNow());

console.log('Using Babel');

var name = "Elbie", time = "today";
console.log(`Hello ${name}, how are you ${time}?`);