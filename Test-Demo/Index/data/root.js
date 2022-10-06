module.exports = {
  _RANGE : 10,//指定生成用户数
  _USER : {
    avatar: {
      width: 90,
      height: 90,
    }
  },
  _ARTICLE : {
    num: 3,// 文章数量
    title_min: 3,// 文章标题长度
    title_max: 7,
    paragraph_min: 3,// 文章内容长度
    paragraph_max: 10,
  },
  _COMMENTS: {
    num: 10,// 评论数量
    min: 1,// 评论内容长度
    max: 2,
  }
}