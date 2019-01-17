// 这个文件是一个 主要入口文件。后面运行的内容都是从这个地方开始

var username = '李四';

var add = function(x) {
  return x + 2;
}

// 引入模块的方式，通过 require 函数
// m1 就是 m1.js 中 的 module.exports 属性
var m1 = require('./m1');

var mm1 = require('./m1');


// console.log(m1.username);'[ x]
// console.log(m1.add(1));
console.log(m1);
console.log(username);
console.log(add(1));
// console.log(module);