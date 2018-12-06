class Beer {
    constructor(max, min) {
        this._maxTemperature = max;
        this._minTemperature = min;

        Object.freeze(this);
    }

    get maxTemp() {
        return this._maxTemperature;
    }

    get minTemp() {
        return this._minTemperature;
    }

}