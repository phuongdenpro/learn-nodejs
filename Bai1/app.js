const fs = require('fs');
const content = fs.readFileSync(__dirname + '/readme.txt', 'utf-8');
console.log(content)