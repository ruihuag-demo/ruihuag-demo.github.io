var a = {
  num: 1,
  toString: ()=> {
    return a.num++;
  }
}
if(a == 1 && a==2 && a==3 ){
  console.log(1);
}