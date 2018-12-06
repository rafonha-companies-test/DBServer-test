export default class Beer {

    constructor(name, min, max, internal) {
        this._beerName = name;
        this._minTemperature = min;
        this._maxTemperature = max;
        this._internalTemperature = internal;

        Object.freeze(this);
    }

    get beerName() {
        return this._beerName;
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