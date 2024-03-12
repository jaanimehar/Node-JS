// server
const http = require("http");
const student_table = require("./apidata");


const server = http.createServer((req, res) => {
    res.writeHead(200, { 'content-type': 'application\json' });
    res.write(JSON.stringify(student_table));
    res.end();

});
server.listen(8000);

