const http = require("http");
const fs = require("fs");

const sendResponse = (filename,STATUSCODES,Response) =>{
fs.readFile('/html/$')
}

const server = http.createServer((request,Response) => {
    console.log(request.url,request.method);//抓取request url 與判斷request method(get or post)

    Response.end('Hello From Nodejs Server');
});

const port = 3000;
const ip = "127.0.0.1";

server.listen(port,ip,() =>{
    console.log(`This is Node dot js , Now Running On Server http://${ip}:${port}}`);
});
