let _ = require('lodash')

let runArray = [
  () => [
    _.add(6, 4),
  ],
  () => [
    _.ceil(4.006),
    _.ceil(6.004, 2),
    _.ceil(6040, -2),
  ]

]

runArray[runArray.length - 1]().map(item => console.log(item)) 