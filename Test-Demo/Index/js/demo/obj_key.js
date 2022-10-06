var a = {}
var b = {
    key: 'a',
}
var c = {
    key : 'c',
}
var d = {};
console.log()
console.log()

a[b] = '123';
console.log( a[b] )
a[c] = '456';
console.log( a[b] )
console.log( a[c] )
console.log( a[{}] )

console.log( "a:",a)
console.log( "b:",b)