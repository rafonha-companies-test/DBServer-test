//Import class Beer
class Beer {

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

//Function to get random temperature
function getRndTemperature(min, max) {

    try {
        return Math.floor(Math.random() * (max - min)) + min;
    } catch (err) {
        alert("Something went wrong with the random temperature function, try again.");
    }
}

//Function that sets the internal temperature of a container depending on the temperature outside the truck
function internalTemp(now, min) {

    try {
        if (temperatureNow == 10) {
            return min;
        } else if (temperatureNow <= 18) {
            return min + 1;
        } else if (temperatureNow <= 25) {
            return min + 2;
        } else if (temperatureNow <= 32) {
            return min + 3;
        } else {
            return min + 4;
        }

    } catch (err) {
        alert("Something went wrong with the internal temperature function, try again.");
    }
}

//Function that controls if the container is in the right temperature
function rightTemp(beer, min, max, internal) {

    try {
        if (internal > (max + 1) || internal < (min - 1)) {
            return alert("The temperature of the container of " + beer + " is " + internal + " and is out of its specific refrigeration temperature, please check!");
        }

        return alert("The temperature of the " + beer + " container is: " + internal);

    } catch (err) {
        alert("Something went wrong, try again.");
    }

}

//Since Australia is a hot country, I've put a random temperature outside the truck between 10 and 40 degrees celsius
var temperatureNow = getRndTemperature(10, 40);
document.getElementById("temperatureNow").innerHTML = temperatureNow;

//Pilsner container
var pilsnerTemp = internalTemp(temperatureNow, 4);
var pilsner = new Beer('Pilsner', 4, 6, pilsnerTemp);

document.getElementById("pilsnerTemp").innerHTML = pilsnerTemp;

rightTemp(pilsner.minTemp, pilsner.maxTemp, pilsner.internalTemp);


//IPA container
var ipaTemp = internalTemp(temperatureNow, 5);
var ipa = new Beer('IPA', 5, 6, ipaTemp);

document.getElementById("ipaTemp").innerHTML = ipaTemp;

rightTemp(ipa.minTemp, ipa.maxTemp, ipa.internalTemp);

//Lager container
var lagerTemp = internalTemp(temperatureNow, 4);
var lager = new Beer('Lager', 4, 7, lagerTemp);

document.getElementById("lagerTemp").innerHTML = lagerTemp;

rightTemp(lager.minTemp, lager.maxTemp, lager.internalTemp);

//Stout container
var stoutTemp = internalTemp(temperatureNow, 6);
var stout = new Beer('Stout', 6, 8, stoutTemp);

document.getElementById("stoutTemp").innerHTML = stoutTemp;

rightTemp(stout.minTemp, stout.maxTemp, stout.internalTemp);

//Wheat beer container
var wBeerTemp = internalTemp(temperatureNow, 3);
var wBeer = new Beer('Wheat beer', 3, 5, wBeerTemp);

document.getElementById("wBeerTemp").innerHTML = wBeerTemp;

rightTemp(wBeer.minTemp, wBeer.maxTemp, wBeer.internalTemp);

//Pale Ale container
var pAleTemp = internalTemp(temperatureNow, 4);
var pAle = new Beer('Pale Ale', 4, 6, pAleTemp);

document.getElementById("pAleTemp").innerHTML = pAleTemp;

rightTemp(pAle.minTemp, pAle.maxTemp, pAle.internalTemp);

