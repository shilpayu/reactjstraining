const camelCase = require('camelcase');
var name = camelCase('shilpa');
var f = camelCase('foo-bar');
var d = camelCase('foo_bar');
console.log(name,f,d);