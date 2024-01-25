let Mock = require('mockjs')
let Random = Mock.Random
const { _RANGE, _ARTICLE,_COMMENTS } = require('./root');
const { userdata } = require('./user');


/**
 *  article
 *  _random_write
*/ 
const articles =[]

for(let i=0;i< _ARTICLE['num']; i++){
  articles.push(Mock.mock({
    'tid': '@id',
    'Cover' : '@image',
    'title' : `@title(${_ARTICLE['title_min']}, ${_ARTICLE['title_max']} )`,
    'paragraph': `@paragraph(${_ARTICLE['paragraph_min']}, ${_ARTICLE['paragraph_max']} )`,
  }))
}

/**
 *  article comments
 *  一篇文章可以有多个评论
 */
const comments = []
for (let i= 0; i< _COMMENTS['num']; i++){
  comments.push(Mock.mock({
    'comment_id': '@id',
    'uid': userdata[Random.integer(0, userdata.length-1)]['id'],
    'context': `@paragraph(${_COMMENTS['min']},${_COMMENTS['max']})`
  }))
}


module.exports = {
  articles: articles,
  comments: comments,
}
