(proto => {
    function myApply(thisArg, args) {
        thisArg = thisArg == undefined ? window : thisArg;
        let type = typeof thisArg;
        if (!/^(object|function)$/.test(type)) {
            if (/^(symbol|bigint)$/.test(type)) {
                thisArg = Object(thisArg);
            } else {
                thisArg = new thisArg.constructor(thisArg);
            }
        }
        let key = Symbol('key');
        thisArg[key] = this;
        let result = thisArg[key](args);
        delete thisArg[key];
        return result;
    }
    proto.myApply = myApply;
})(Function.prototype)