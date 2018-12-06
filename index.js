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

//Controls if the beer container is in the right temperature
function rightTemp(min, max, internal) {

    try {
        if (internal > (max + 1) || internal < (min - 1)) {
            return alert("The temperature of the container is " + internal + " and is out of its specific refrigeration temperature, please check!");
        }

        return alert("The temperature of this container is: " + internal);

    } catch (err) {
        alert("Something went wrong, try again.");
    }

}

//Since Australia is a hot country, I've put a random temperature outside the truck between 10 and 40 degrees celsius
var temperatureNow = getRndTemperature(10, 40);
document.getElementById("temperatureNow").innerHTML = temperatureNow;

//Pilsner container
var pilsnerTemp = internalTemp(temperatureNow, 4);
var pilsner = new Beer(4, 6, pilsnerTemp);

function pilsnerCheck() {
    rightTemp(pilsner.minTemp, pilsner.maxTemp, pilsner.internalTemp);
}

//IPA container
var ipaTemp = internalTemp(temperatureNow, 5);
var ipa = new Beer(5, 6, ipaTemp);

function ipaCheck() {
    rightTemp(ipa.minTemp, ipa.maxTemp, ipa.internalTemp);
}

//Lager container
var lagerTemp = internalTemp(temperatureNow, 4);
var lager = new Beer(4, 7, lagerTemp);

function lagerCheck() {
    rightTemp(lager.minTemp, lager.maxTemp, lager.internalTemp);
}

//Stout container
var stoutTemp = internalTemp(temperatureNow, 6);
var stout = new Beer(6, 8, stoutTemp);

function stoutCheck() {
    rightTemp(stout.minTemp, stout.maxTemp, stout.internalTemp);
}

//Wheat beer container
var wBeerTemp = internalTemp(temperatureNow, 3);
var wBeer = new Beer(3, 5, swBeerTemp);

function wBeerCheck() {
    rightTemp(wBeer.minTemp, wBeer.maxTemp, wBeer.internalTemp);
}

//Pale Ale container
var pAleTemp = internalTemp(temperatureNow, 4);
var pAle = new Beer(4, 6, pAleTemp);

function pAleCheck() {
    rightTemp(pAle.minTemp, pAle.maxTemp, pAle.internalTemp);
} 

