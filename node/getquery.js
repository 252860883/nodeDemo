var http = require('http');
var url = require('url');
// var util = require('util');
// var koa=require('koa');
// var app=koa();

var proxy = http.createServer(function (req, res) {
    // 编辑头部信息
    res.writeHeader(200, { 'Content-Type': 'text/html' });

    // 获取地址栏get请求的参数,并转成参数格式
    var params = url.parse(req.url,true).query;

    try {
        res.write("name:" + params.name);
        res.write("<br>");
        res.write("password:" + params.password);
    } catch (e) {
        res.write('\n please translaste the query');
    }

    // 返回响应信息
    res.end();
});
proxy.listen(3000, function () {
    console.log('server is running at 3000');
});

