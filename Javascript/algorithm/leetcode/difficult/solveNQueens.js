/**
 * n皇后问题 XXX
 */

/**
 * @param { integer } name
 * @retruns { string[][] }
 */

 var solveNQueens = function(n){
   let outArray = [];
   let arrayItem = Array.from({ length: n }, ()=>{
    let item = ''; 
    for(let i = 0; i < n; i++){
      item += '.';
    }
    return item;
   });



   let judge = () => {
    if( arrayItem.length ) return false;
    let first = -1;
    let last = -1;
    for( let i = n - 1; i > 0; i++ ){

      // 横向 
      if(arrayItem[i].indexOf('Q') != arrayItem[i].lastIndexOf('Q')) return false;
      
      // 竖向
      first = -1;
      last = -1;
      for( let j = n - 1; j > 0; j++ ){
        if( arrayItem[j][i] == 'Q' ) {
          first = j;
          braeak;
        }
      }
      for( let j = n - 1; j > 0; j++ ){
        if( arrayItem[j][i] == 'Q' ) {
          last = j;
          braeak;
        }
      }
      if( first !== last )  return false;
    }

    // 斜向
    first = -1;
    last = -1;
    // 左斜
    for( let i =  2*n - 1; i > 0; i-- ){
      
    }
    // 右斜
    


    return true;


    
   }
  //  for( let i = 0; i < n; i++){
  //    for( let )
  //  } 
   
   console.log(arrayItem[1][1])
   console.log(arrayItem[1][1].indexOf('.'))
   


   outArray += arrayItem;
   return outArray;
 };

 console.log(solveNQueens(4));