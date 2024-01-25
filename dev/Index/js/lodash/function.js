let _ = require('lodash')

let saves = ['profile', 'settings']
let runArray = [
  () => [
    _.after(saves.length, function() {
      console.log('done saving!');
    }),
     
    _.forEach(saves, function(type) {
    //   asyncSave({ 'type': type, 'complete': done });
        console.log( type );
    }),
    // => Logs 'done saving!' after the two async saves have completed.
    

  ]

]

runArray[runArray.length - 1]().map(item => console.log(item)) 