const loginCheck = (username, password) => {
  if (username === "a" && password === "123") {
    return true;
  } else {
    return false;
  }
};

module.exports = { loginCheck };
