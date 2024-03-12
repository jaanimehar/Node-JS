const fs=require('fs');
// create a asyncronous file.
fs.writeFile('mysecondfile.txt','This is asyncronous file system.',(val)=>{
    console.log("the file is created.");

});
// add data is this file system.
fs.appendFile('mysecondfile.txt',' good morning',(val)=>{
    console.log("the data is append in file.")
});

// read file.
 fs.readFile('mysecondfile.txt','utf-8',(err,data)=>{
    console.log(data);
});