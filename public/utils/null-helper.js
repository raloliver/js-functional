export class IsNull {

    constructor(value) {
        this._value = value;
    }

    static of(value) {
        return new IsNull(value);
    }

    isNothing() {
        return this._value === null || this._value === undefined;
    }

    mapper(fn) {
        if (this.isNothing()) {
            return IsNull.of(null);
        }

        return IsNull.of(fn(this._value));
    }

    /**
     * Retorna o valor embrulhado pela mônada. Porém, se o método receber um valor, é este valor que será retornado caso a mônada embrulhe um valor.
     *
     * @param {*} value
     * @return {*} 
     * @memberof IsNull
     */
    getValue(value) {
        if (this.isNothing()) {
            return value;
        }
        return this._value;
    }
}