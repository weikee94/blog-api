// 标准输入输出
// process.stdin.pipe(process.stdout);

// node input output
// const http = require("http");
// const server = http.createServer((req, res) => {
//   if (req.method === "POST") {
//     req.pipe(res);
//   }
// });
// server.listen(8000);

// stream copy file 以流水方式复制
// const fs = require("fs");
// const path = require("path");

// const fileName1 = path.resolve(__dirname, "data.txt");
// const fileName2 = path.resolve(__dirname, "data_to.txt");

// const readStream = fs.createReadStream(fileName1);
// const writeStream = fs.createWriteStream(fileName2);

// // 连接水桶
// readStream.pipe(writeStream);
// readStream.on("data", (chunk) => {
//   console.log(chunk.toString());
// });
// readStream.on("end", () => {
//   console.log("copy done");
// });

// http 请求读取文件通过 stream 方式
const http = require("http");
const fs = require("fs");
const path = require("path");
const fileName1 = path.resolve(__dirname, "data.txt");
const server = http.createServer((req, res) => {
  if (req.method === "GET") {
    const readStream = fs.createReadStream(fileName1);
    readStream.pipe(res);
  }
});
server.listen(8000);
