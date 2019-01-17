// 这是一个 模块

var exports = module.exports;

var username = '张三';

var add = function(x) {
  return x;
}

// console.log(module);

// 文件最后做暴露
// module.exports = {
//   username: username,
//   add: add
// }

// exports.username = username;
// exports.add = add;



console.log('我来了');
module.exports = username;
// exports = username;