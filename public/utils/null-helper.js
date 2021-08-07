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

    getValue(value) {
        if (this.isNothing()) {
            return value;
        }
        return this._value;
    }
}