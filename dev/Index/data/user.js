let Mock = require('mockjs')
let Random = Mock.Random
let { _RANGE, _USER } = require('./root')

Random.extend({
  sex: function() {
    let sexs = ['男','女','保密']
    return this.pick(sexs)
  }
})

Random.extend({
  phone: function() {
    let phonePrefixs = ['132', '135', '189']
    return this.pick(phonePrefixs) + Mock.mock(/\d{8}/)
  }
})
// user user data
let userdata = [];
for(let i=0; i< _RANGE; i++){
  userdata.push(Mock.mock({
      'id': '@id',
      'name': '@name',
      'sex' : '@SEX',
      'tel' : '@phone',
      'birthday': '@datetime',
      'buidtime': '@datetime',
      'Avatar': `http://lorempixel.com/${ _USER['avatar']['width'] }/${ _USER['avatar']['height'] }/`,
      'adderss':{
        'region':'@region',
        'country':'@county(true)',
        'zip':'@zip',
      }
      
  }))
}

module.exports = {
  userdata : userdata,
}

