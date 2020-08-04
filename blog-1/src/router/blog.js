const {
  getList,
  getDetail,
  newBlog,
  updateBlog,
  delBlog,
} = require("../controller/blog");
const { SuccessModel, ErrorModel } = require("../model/resModel");

const handleBlogRouter = (req, res) => {
  const method = req.method; // GET POST
  const id = req.query.id;

  // retrieve blog list
  if (method === "GET" && req.path === "/api/blog/list") {
    const author = req.query.author || "";
    const keyword = req.query.keyword || "";
    const listData = getList(author, keyword);
    return new SuccessModel(listData);
  }

  // retrieve blog content
  if (method === "GET" && req.path === "/api/blog/detail") {
    const detailData = getDetail(id);
    return new SuccessModel(detailData);
  }

  // create new blog
  if (method === "POST" && req.path === "/api/blog/new") {
    const data = newBlog(req.body);
    return new SuccessModel(data);
  }

  // update a blog
  if (method === "POST" && req.path === "/api/blog/update") {
    const data = updateBlog(id, req.body);
    if (result) {
      return new SuccessModel(data);
    } else {
      return new ErrorModel("update blog failed");
    }
  }

  // delete blog
  if (method === "POST" && req.path === "/api/blog/del") {
    const data = deleteBlog(id);
    if (result) {
      return new SuccessModel(data);
    } else {
      return new ErrorModel("delete blog failed");
    }
  }
};

module.exports = handleBlogRouter;
