if (!Array.prototype.$flatMap) {
    Array.prototype.$flatMap = function (cb) {
        return this.map(cb).reduce((newArray, array) => newArray.concat(array), []);
    }
}