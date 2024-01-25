let _hander = {
    get: function( target, _p ){
        if( target.name === 'grh'){
            return 'I am grh. '
        }
    },
    set:function( _obj, _prop, _val ){
        if( _prop === 'todo'){
            _obj[_prop] = _val;
        }
    }
}

let objName = {
    name: 'grh',
    todo: 'coding',
}
let _proxyObj = new Proxy( objName , _hander );

console.log( _proxyObj.name )

_proxyObj.todo = 'coded'
console.log( _proxyObj );
