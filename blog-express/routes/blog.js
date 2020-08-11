var express = require("express");
var router = express.Router();
const {
  getList,
  getDetail,
  newBlog,
  updateBlog,
  delBlog,
} = require("../controller/blog");
const { SuccessModel, ErrorModel } = require("../model/resModel");
const loginCheck = require("../middleware/loginCheck");

/* GET blog page. */
router.get("/list", (req, res, next) => {
  let author = req.query.author || "";
  const keyword = req.query.keyword || "";

  if (req.query.isadmin) {
    // 管理员界面
    if (req.session.username == null) {
      // 未登录
      res.json(new ErrorModel("havent login"));
      return;
    }

    // 强制查询自己的博客
    author = req.session.username;
  }

  const result = getList(author, keyword);
  return result.then((listData) => {
    res.json(new SuccessModel(listData));
  });
});

// Get blog details
router.get("/detail", (req, res, next) => {
  const result = getDetail(req.query.id);
  return result.then((data) => {
    res.json(new SuccessModel(data));
  });
});

// create new blog
router.post("/new", loginCheck, (req, res, next) => {
  req.body.author = req.session.username;
  const result = newBlog(req.body);
  return result.then((data) => {
    res.json(new SuccessModel(data));
  });
});

// update a blog
router.post("/update", loginCheck, (req, res, next) => {
  const result = updateBlog(req.query.id, req.body);
  return result.then((val) => {
    if (val) {
      res.json(new SuccessModel());
    } else {
      res.json(new ErrorModel("update blog failed"));
    }
  });
});

// delete a blog
router.post("/del", loginCheck, (req, res, next) => {
  const author = req.session.username;
  const result = delBlog(req.query.id, author);
  return result.then((val) => {
    if (val) {
      res.json(new SuccessModel());
    } else {
      res.json(new ErrorModel("remove blog failed"));
    }
  });
});

module.exports = router;
