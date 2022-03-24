var chr = require('./local');
var http = require('http');

http.createServer(function(req,res){
    res.writeHead(200,{'Content-type':'text/html'});
    res.end(`<h1> Welcome Nord js!!!</h1>
    ${chr}`);
    
}).listen(4000);