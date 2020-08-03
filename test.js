// Init Server

const http = require("http");
const server = http.createServer((req, res) => {
  res.end("Hello World");
});
server.listen(8000);

// POST request
const http = require("http");
const server = http.createServer((req, res) => {
  if (req.method === "POST") {
    // data format
    console.log("content-type", req.headers["content-type"]);
    // receive data
    let postData = "";
    // using chunk 数据流模式
    req.on("data", (chunk) => {
      postData += chunk.toString();
    });
    req.on("end", () => {
      console.log(postData);
      res.end("hello world");
    });
  }
});
server.listen(8000);
