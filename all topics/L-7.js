const path = require('path');
console.log(path.dirname("D:/MY codes/Node Js/L-7.js"));
console.log(path.extname("D:/MY codes/Node Js/L-7.js"));
console.log(path.basename("D:/MY codes/Node Js/L-7.js"));
let myfilepath = {
    dir: "E:/",
    base: "L-6.js"
}
const format = path.format(myfilepath);
console.log(format);
const parse = path.parse("D:/MY codes/Node Js/L-7.js")
console.log(parse);




