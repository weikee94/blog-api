const { login } = require("../controller/user");
const { SuccessModel, ErrorModel } = require("../model/resModel");
const { set } = require("../db/redis");

const handleUserRouter = (req, res) => {
  const method = req.method;

  // login
  if (method === "POST" && req.path === "/api/user/login") {
    const { username, password } = req.body;
    const result = login(username, password);
    return result.then((data) => {
      if (data.username) {
        // 设置 session
        req.session.username = data.username;
        req.session.realname = data.realname;

        console.log("req.session is ", req.session);

        // 同步到redis
        set(req.sessionId, req.session);

        return new SuccessModel();
      } else {
        return new ErrorModel("login failed");
      }
    });
  }
};

module.exports = handleUserRouter;
