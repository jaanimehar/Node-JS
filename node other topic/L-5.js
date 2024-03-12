const fs=require('fs');
// first read syncronous file.
const data=fs.readFileSync('mysecondfile.txt','utf-8');
console.log(data);
console.log("after The suncronous file is read.");
// now read asyncronous file.
fs.readFile('mysecondfile.txt','utf-8',(err,data)=>{
    console.log(data);

});
console.log("after The asyncronous file is read.");