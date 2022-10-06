let _ = require('lodash')

let runArray = [
  () => [
    _.countBy([6.1, 4.2, 6.3], Math.floor),
    // => { '4': 1, '6': 2 }
    _.countBy([6.1, 4.2, 6.4], item => {
      console.log(item);
      return Math.floor(item)
    }),
    // The `_.property` iteratee shorthand.
    _.countBy(['one', 'two', 'three'], 'length'),
    // => { '3': 2, '5': 1 }
    _.countBy(['aa', 'bbBBB', 'ccc'],'length'),

    _.countBy(['aa', 'bbBBB', 'ccc', 'ddddd'], item => {
        // console.log( item ) 
        return item.length
    }),

  ]

]

runArray[runArray.length - 1]().map(item => console.log(item)) 