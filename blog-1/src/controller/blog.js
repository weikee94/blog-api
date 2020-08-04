const getList = (author, keyword) => {
  // 先返回假数据 (正确格式)
  return [
    {
      id: 1,
      title: "title a",
      content: "content a",
      createTime: 1121212,
      author: "a",
    },
    {
      id: 2,
      title: "title b",
      content: "content b",
      createTime: 2332234,
      author: "n",
    },
  ];
};

const getDetail = (id) => {
  return {
    id: 1,
    title: "title a",
    content: "content a",
    createTime: 132345654,
    author: "author name",
  };
};

module.exports = {
  getList,
  getDetail,
};
