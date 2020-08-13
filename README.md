# blog-api

Blog API

# API Interface

| Description           |    Interface     | Methods | URL Params      | Remarks                         |
| --------------------- | :--------------: | ------: | --------------- | ------------------------------- |
| retrieve blog list    |  /api/blog/list  |     get | author, keyword |                                 |
| retrieve blog content | /api/blog/detail |     get | id              |                                 |
| add new blog          |  /api/blog/new   |    post |                 | body = {msg: ''}                |
| update new blog       | /api/blog/update |    post | id              | body = {updateMsg: ''}          |
| remove new blog       |  /api/blog/del   |    post | id              |                                 |
| login                 | /api/user/login  |    post |                 | body = {name: '', password: ''} |

# 总结

![总结](https://github.com/weikee94/blog-api/blob/master/conclusion.png)
