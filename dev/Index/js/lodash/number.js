let _ = require('lodash')

let runArray = [
  () => [
      // 后两个参数 分别是上限和下限
    _.clamp( -10, -5, 5),
    _.clamp( 10, -5, 5),
  ],
  () => [
      // 判断第一个值是否在后两个参数定义的范围中
      // 若 总共只有两个参数 第二参数 为上限 下限为 0 , 若第二个参数为负数, 上限为0 , 下限为该参数
      _.inRange(3, 2, 4),
      _.inRange(3, 4),
      _.inRange(3, -4),
      _.inRange(-2, -4),
  ],
  () => [
      // 三个参数分别为: 上限[0], 下限[1], 是否为浮点数
      _.random(5), // 改范围为0 - 5
      _.random(1, 5),
      _.random(1, 5, true),
      _.random(1.1, 5.1),// 前两个参数为浮点型, 就会认为是浮点型
  ]
]

runArray[runArray.length - 1]().map(item => console.log(item)) 