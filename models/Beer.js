class Beer {

    constructor(min, max, internal) {
        this._minTemperature = min;
        this._maxTemperature = max;
        this._internalTemperature = internal;

        Object.freeze(this);
    }

    get minTemp() {
        return this._minTemperature;
    }

    get maxTemp() {
        return this._maxTemperature;
    }

    get internalTemp() {
        return this._internalTemperature;
    }

}