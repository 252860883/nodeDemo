const zlib = require('zlib');
const http = require('http');

http.createServer(function (request, response) {
    var i = 1024,
        data = '';

    while (i--) {
        data += '.';
    }
    // 判断浏览器是否支持 gzip 解压缩
    if ((request.headers['accept-encoding'] || '').indexOf('gzip') !== -1) {
        // zlib 进行 gzip的压缩头部和报文
        zlib.gzip(data, function (err, data) {
            response.writeHead(200, {
                'Content-Type': 'text/plain',
                'Content-Encoding': 'gzip'
            });
            response.end(data);
        });
    } else {
        response.writeHead(200, {
            'Content-Type': 'text/plain'
        });
        response.end(data);
    }
}).listen(4000);
