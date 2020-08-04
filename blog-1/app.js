// 项目业务代码
const handleBlogRouter = require("./src/router/blog");
const handleUserRouter = require("./src/router/user");

const serverHandle = (req, res) => {
  // 设置返回格式 JSON
  res.setHeader("Content-type", "application/json");

  // 获取 path
  const url = req.url;
  req.path = url.split("?")[0];

  // 处理 blog 路由
  const blogData = handleBlogRouter(req, res);
  if (blogData) {
    res.end(JSON.stringify(blogData));
    // 要放return 要不然会持续执行
    return;
  }

  // 处理 user 路由
  const userData = handleUserRouter(req, res);
  if (userData) {
    res.end(JSON.stringify(userData));
    return;
  }

  // handle 404
  res.writeHead(404, { "Content-type": "text/plain" });
  res.write("404 not found\n");
  res.end();
};

module.exports = serverHandle;
//process.env.NODE_ENV,
