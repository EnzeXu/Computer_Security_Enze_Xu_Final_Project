var PORT = 80;

var http = require('http');
var url=require('url');
var fs=require('fs');
var mine=require('./mine.js').types;
var path=require('path');

var server = http.createServer(function (request, response) {
    //var pathname = url.parse(request.url).pathname;
    //var realPath = path.join("assets", pathname);
    //console.log(realPath);
   

    var pathname=__dirname + url.parse(request.url).pathname;
    if (path.extname(pathname)=="") {
        pathname+="/";
    }
    if (pathname.charAt(pathname.length-1)=="/"){
        pathname += "index.html";
	//pathname += "41.pptx";
    }
    console.log(pathname + "(receive: " + request.url + ")")
    //var ext = path.extname(realPath);
    var ext = path.extname(pathname);
    ext = ext ? ext.slice(1) : 'unknown';
    //console.log(ext);
    fs.exists(pathname, function (exists) {
        if (!exists) {
            response.writeHead(404, {
                'Content-Type': 'text/plain'
            });

            response.write("This request URL " + pathname + " was not found on this server.");
            response.end();
        } else {
            fs.readFile(pathname, "binary", function (err, file) {
                if (err) {
                    response.writeHead(500, {
                        'Content-Type': 'text/plain'
                    });
                    response.end(err);
                } else {
                    var contentType = mine[ext] || "text/plain";
                    response.writeHead(200, {
                        'Content-Type': contentType
                    });
                    response.write(file, "binary");
                    response.end();
                }
            });
        }
    });
});
server.listen(PORT);
console.log("Server runing at port: " + PORT + ".");
