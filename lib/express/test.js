const express = require("./like-express");

// 本次 http 请求的实例
const app = express();

app.use((req, res, next) => {
  console.log("request start", req.method, req.url);
  next();
});

app.listen(8000, () => {
  console.log("server is running on port 8000");
});
