const { getList, getDetail } = require("../controller/blog");
const { SuccessModel, ErrorModel } = require("../model/resModel");

const handleBlogRouter = (req, res) => {
  const method = req.method; // GET POST

  // retrieve blog list
  if (method === "GET" && req.path === "/api/blog/list") {
    const author = req.query.author || "";
    const keyword = req.query.keyword || "";
    const listData = getList(author, keyword);
    return new SuccessModel(listData);
  }

  // retrieve blog content
  if (method === "GET" && req.path === "/api/blog/detail") {
    const id = req.query.id;
    const detailData = getDetail(id);
    return new SuccessModel(detailData);
  }

  // create new blog
  if (method === "POST" && req.path === "/api/blog/new") {
    return {
      msg: "create new blog",
    };
  }

  // update a blog
  if (method === "POST" && req.path === "/api/blog/update") {
    return {
      msg: "update a blog",
    };
  }

  // delete blog
  if (method === "POST" && req.path === "/api/blog/del") {
    return {
      msg: "delete a blog",
    };
  }
};

module.exports = handleBlogRouter;
