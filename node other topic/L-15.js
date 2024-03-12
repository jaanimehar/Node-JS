const http = require("http");

const hostname = "127.0.0.1";
const port = 8000;

const server = http.createServer((req, res) => {
    // console.log(req.url);
    if (req.url == "/") {
        res.end("this is Home page.");

    }
    else if (req.url == "/aboutus") {
        res.end("this is About Us page.");

    }
    else if (req.url == "/login") {
        res.writeHead(200,{"content-type":"text/html"});

        res.end("this is login page.");

    }
    else {
        res.writeHead(404,{"content-type":"text/html"});
        res.end("404 error. page is not found.");

    }


});

server.listen(port, hostname, () => {
    console.log("this server is run")
});