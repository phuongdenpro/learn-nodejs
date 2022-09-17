const fs = require('fs');
const content = fs.readFileSync(__dirname + '/readme.txt', 'utf-8');
console.log(content);
fs.readFile(__dirname + '/readme.txt', function(err,data){
    console.log(data);
})