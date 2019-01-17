var http = require('http');

var server = http.createServer(function(request,response) {
    
    console.log('我咩有进来');

    response.writeHead(200,{
        'Content-Type' : 'text/html;charset=utf-8'
    });
    response.write('<h1 >我真他妈的帅,帅帅帅,你说的没错</h1>');
    response.end();

});
server.listen(3000);

