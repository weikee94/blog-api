const { exec } = require("../db/mysql");
const xss = require("xss");
const getList = (author, keyword) => {
  // 1=1 return true as a technique to allow sql query exec
  let sql = `select * from blogs where 1=1 `;
  if (author) {
    sql += `and author='${author}' `;
  }
  if (keyword) {
    sql += `and title like '%${keyword}%' `;
  }
  sql += `order by createtime desc; `;

  // return promise
  return exec(sql);
};

const getDetail = (id) => {
  const sql = `select * from blogs where id='${id}'`;
  return exec(sql).then((rows) => {
    return rows[0];
  });
};

const newBlog = (blogData = {}) => {
  // blogData 是一个博客对象，包含title content author 属性
  const title = xss(blogData.title);
  const content = blogData.content;
  const author = blogData.author;
  const createTime = Date.now();

  const sql = `insert into blogs (title, content, createtime, author) values 
  ('${title}', '${content}', '${createTime}', '${author}')`;

  return exec(sql).then((insertData) => {
    console.log(`insert data is: `, insertData);
    return {
      id: insertData.insertId,
    };
  });
};

const updateBlog = (id, blogData = {}) => {
  // id: the one need update blog id
  const title = blogData.title;
  const content = blogData.content;

  const sql = `update blogs set title='${title}', content='${content}' where id='${id}'`;

  return exec(sql).then((updateData) => {
    console.log("updateData is ", updateData);
    if (updateData.affectedRows > 0) {
      return true;
    }
    return false;
  });
};

const delBlog = (id, author) => {
  const sql = `delete from blogs where id='${id}' and author='${author}'`;
  return exec(sql).then((delData) => {
    console.log(delData);
    if (delData.affectedRows > 0) {
      return true;
    }
    return false;
  });
};

module.exports = {
  getList,
  getDetail,
  newBlog,
  updateBlog,
  delBlog,
};
