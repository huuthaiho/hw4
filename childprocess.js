var http = require('http');
const {fork} = require ('child_process');
var url = require('url');

http.createServer(function(request, response){
    var queryString = url.parse(request.url, true).query;
    const childProcess = fork('myfile.js');
    if(queryString.url) {
        childProcess.send(queryString.url);
        childProcess.on('message', (data) => {
            response.end(data);
        });
    } else {
        response.end('file name not found.')
    }
    
    
}).listen(1111);