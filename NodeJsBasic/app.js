const fs = require('fs');
const content = fs.readFileSync(__dirname + '/readme.txt', 'utf-8');
console.log(content);
fs.readFile(__dirname + '/readme.txt','utf-8', function(err,data){
    console.log(data);
})

var read = fs.createReadStream(__dirname + '/readme.txt');
var wire = fs.createWriteStream(__dirname+'/readmecopy.txt');
read.on('data', function(chunk){
    console.log(chunk.length);
    wire.write(chunk);
})