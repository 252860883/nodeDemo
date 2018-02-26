var http = require('http');
var querystring = require('querystring');
// 666
var postHTML =
    '<html><head><meta charset="utf-8"><title>post 获取参数实例</title></head>' +
    '<body>' +
    '<form method="post">' +
    '网站名： <input name="name"><br>' +
    '网站 URL： <input name="url"><br>' +
    '<input type="submit">' +
    '</form>' +
    '</body></html>';

var proxy = http.createServer(function (req, res) {
    var body = "";//设置body变量存储请求的实体

    //  通过req的data事件监听函数，每当接受到请求体的数据，就累加到post变量中
    req.on('data', function (chunk) {
        body += chunk;
    });

    //  end事件响应后开始解析post过来的数据
    req.on('end', function () {
        // 解析参数
        body = querystring.parse(body);
        // 设置响应头部信息及编码
        res.writeHead(200, { 'Content-Type': 'text/html; charset=utf8' });

        if (body.name && body.url) { // 输出提交的数据
            res.write("网站名：" + body.name);
            res.write("<br>");
            res.write("网站 URL：" + body.url);
        } else {  // 输出表单
            res.write(postHTML);
        }
        res.end();
    });
})

proxy.listen(3000,function(){
    console.log('server is running at 3000');
})
