// koa 中 async await的用法

var Koa = require('koa');
var app = new Koa();

// x-response-time

app.use(async (ctx, next) => {
    const start = Date.now();
    await next(); // 函数暂停，控制传递给下一个中间件
    const ms = Date.now() - start;
    ctx.set('X-Response-Time', `${ms}ms`);
});

// logger

app.use(async (ctx, next) => {
    const start = Date.now();
    await next(); // 函数暂停，控制传递给下一个中间件
    const ms = Date.now() - start;
    console.log(`${ctx.method} ${ctx.url} - ${ms}`);
});

// response

app.use(async ctx => {
    ctx.body = 'Hello World';// 下游没有要执行的中间件了，则返回上游继续执行
});

// app.listen 实际上只是一个语法糖
// const http = require('http');
// const Koa = require('koa');
// const app = new Koa();
// http.createServer(app.callback()).listen(3000);

app.listen(3000);
