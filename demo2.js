var http = require('http');
var c=`nord js`
http.createServer(function(req,res){
    res.writeHead(200,{'Content-type':'text/html'});
    res.end(`<h1> Welcome Nord js!!!<h1>
    ${c}`);
    
}).listen(3000);