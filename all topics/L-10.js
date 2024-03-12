const http=require('http');
const fs=require('fs');
const htmlfile=fs.readFileSync("F:/MY codes/Html practise/form.html");
const port=8000;
const hostname='127.0.0.1';

// create own server;
const server=http.createServer((req, res)=>{
    // res.write(htmlfile)
    res.end(htmlfile);

});
server.listen(port, hostname,()=>{
    console.log(`http://${hostname}:${port}/`);
});