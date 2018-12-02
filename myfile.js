var fileSystem = require('fs');
var path = require('path');
process.on('message', (fileName) => {
    
    // asynchronous
    var filePath = path.join(__dirname, fileName);
    var contentFile = fileSystem.readFile(filePath, 'utf8', (err, data) => process.send(data));
    
    // synchronous
    // var contentFile = fileSystem.readFileSync(path.join(__dirname, fileName),'utf8');
    // console.log(contentFile);
    // process.send(contentFile);
});