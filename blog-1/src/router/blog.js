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

    req.body.author = "zhangsan";
    const result = newBlog(req.body);
    return result.then((data) => {
      return new SuccessModel(data);
    });
  }

  // update a blog
  if (method === "POST" && req.path === "/api/blog/update") {
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
    const author = "author bb"; // fake data
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
