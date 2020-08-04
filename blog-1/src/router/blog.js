const handleBlogRouter = (req, res) => {
  const method = req.method; // GET POST

  // retrieve blog list
  if (method === "GET" && req.path === "/api/blog/list") {
    return {
      msg: "retrieve list interface",
    };
  }

  // retrieve blog content
  if (method === "GET" && req.path === "/api/blog/detail") {
    return {
      msg: "retrieve content interface",
    };
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
