// 这是一个 基于 nodejs实现 的 web服务器

// nodejs 中提供了很多的 核心（内置）模块
// http 模块，就能够让我们实现 web服务器
var http = require('http');

// 通过 http对象的 createServer方法创建了一个 web服务
/**
 * @param {Object} request 请求
 * @param {Object} response 响应
 */
var server = http.createServer(function(request, response) {
  console.log('我有咩有进来');
  // 需要响应浏览器发来的请求

  // 设置 响应头
  response.writeHead(200, {
    // 'Content-Type': 'text/css; charset=utf-8'
    'Content-Type': 'text/html; charset=utf-8'
  });

  // 设置 返回主体内容
  response.write('<h1>我的天，李威真帅, 我的地，陈锦也帅。</h1>');

  // 注意，要结束响应
  response.end();
});

// 通过 server 的listen 监听一个 端口号
server.listen(3000);


// 在浏览器中如何访问我这个 web服务器
// http://localhost:3000


// 这段代码，每次修改一下，都需要重新启动。很费劲。推荐一个 能够监听文件的改动并帮我们自动重新启动的工具。

// 1. supervisor
// 2. nodemon

// 如果使用：
// 全局安装
// npm install -g xxxxx
// 使用 supervisor 或者 nodemon 去代替 node 命令 ，主要用在起服务的地方。
