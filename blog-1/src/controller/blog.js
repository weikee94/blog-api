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

const newBlog = (blogData = {}) => {
  // blogData 是一个博客对象，包含title content 属性
  console.log(blogData);
  return {
    id: 3, // 表示新建博客，插入到数据表里面的 id
  };
};

const updateBlog = (id, blogData = {}) => {
  // id: the one need update blog id
  console.log("update blog", id, blogData);
  return true;
};

const delBlog = (id) => {
  return true;
};

module.exports = {
  getList,
  getDetail,
  newBlog,
  updateBlog,
  delBlog,
};
