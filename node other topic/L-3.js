const file=require('fs');
file.writeFileSync('read.txt','hello creating file');
file.appendFileSync('read.txt',' good morning');
const r=file.readFileSync('read.txt');
console.log(r);
console.log("read file:");
console.log(r.toString());
// file.renameSync('read.txt','myfirstfile.txt ');

