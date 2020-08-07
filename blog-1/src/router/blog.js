const {
  getList,
  getDetail,
  newBlog,
  updateBlog,
  delBlog,
} = require("../controller/blog");
const { SuccessModel, ErrorModel } = require("../model/resModel");

// 统一的登录验证函数
const loginCheck = (req) => {
  if (!req.session.username) {
    return Promise.resolve(new ErrorModel("尚未登录"));
  }
};

const handleBlogRouter = (req, res) => {
  const method = req.method; // GET POST
  const id = req.query.id;

  // retrieve blog list
  if (method === "GET" && req.path === "/api/blog/list") {
    let author = req.query.author || "";
    const keyword = req.query.keyword || "";

    if (req.query.isadmin) {
      // 管理员界面
      const loginCheckResult = loginCheck(req);
      if (loginCheckResult) {
        // 未登录
        return loginCheckResult;
      }

      // 强制查询自己的博客
      author = req.session.username;
    }

    const result = getList(author, keyword);
    return result.then((listData) => {
      return new SuccessModel(listData);
    });
  }

  // retrieve blog content
  if (method === "GET" && req.path === "/api/blog/detail") {
    // const detailData = getDetail(id);
    // return new SuccessModel(detailData);
    const result = getDetail(id);
    return result.then((data) => {
      return new SuccessModel(data);
    });
  }

  // create new blog
  if (method === "POST" && req.path === "/api/blog/new") {
    // const data = newBlog(req.body);
    // return new SuccessModel(data);

    const loginCheckResult = loginCheck(req);
    if (loginCheckResult) {
      // 未登录
      return loginCheckResult;
    }

    req.body.author = req.session.username;
    const result = newBlog(req.body);
    return result.then((data) => {
      return new SuccessModel(data);
    });
  }

  // update a blog
  if (method === "POST" && req.path === "/api/blog/update") {
    const loginCheckResult = loginCheck(req);
    if (loginCheckResult) {
      // 未登录
      return loginCheckResult;
    }

    const result = updateBlog(id, req.body);
    return result.then((val) => {
      if (val) {
        return new SuccessModel(result);
      } else {
        return new ErrorModel("update blog failed");
      }
    });
  }

  // delete blog
  if (method === "POST" && req.path === "/api/blog/del") {
    const loginCheckResult = loginCheck(req);
    if (loginCheckResult) {
      // 未登录
      return loginCheckResult;
    }

    const author = req.session.username;
    const result = delBlog(id, author);
    return result.then((val) => {
      if (val) {
        return new SuccessModel(result);
      } else {
        return new ErrorModel("delete blog failed");
      }
    });
  }
};

module.exports = handleBlogRouter;
