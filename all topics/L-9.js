const http=require('http');
//crate web server.
// use create server method.
const port=8000;
const hostname="127.0.0.1";
const server=http.createServer((req,res)=>{
    //add http header 
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.writeHead(200,{'Content-Type':'txt/html'});
    res.write("good morning ");
    res.end("hello client");

});
server.listen(port,hostname,()=>{
    console.log(`server is run on http://${hostname}:${port}/`);

});