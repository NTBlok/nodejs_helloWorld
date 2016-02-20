/*
 * main.js
 * Copyright (C) 2016 ubuntu <ubuntu@ip-172-31-19-147>
 *
 * Distributed under terms of the MIT license.
 */
var http = require("http");

http.createServer(function (request, response) {
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.end('Hello World\n');
}).listen(8080);
