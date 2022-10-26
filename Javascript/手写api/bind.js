(proto => {
    function myBind(thisArg, ...args) {
        let _this = this;
        thisArg = thisArg == undefined ? window : thisArg;
        let type = typeof thisArg;
        if (!/^(object|function)$/.test(type)) {
            if (/^(symbol|bigint)$/.test(type)) {
                thisArg = Object(thisArg);
            } else {
                thisArg = new thisArg.constructor(thisArg);
            }
        }
        return function an(...innerArgs) {
            _this.call(thisArg, ...args.concat(innerArgs));
        }
    }
    proto.myBind = myBind;
})(Function.prototype)