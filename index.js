//Function to get random temperature
function getRndTemperature(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

//Controls if the beer container is in the right temperature
function rightTemp(min, max, internal) {

    try {
        if (internal > (max + 1) || internal < (min - 1)) {
            return alert("The temperature of the container is out of its specific refrigeration temperature, please check!");
        }
    } catch (err) {
        alert("Something went wrong, try again.");
    }

}

//Since Australia is a hot country, I've put a random temperature between 10 and 40 degrees celsius
document.getElementById("temperatureNow").innerHTML = getRndTemperature(10, 40);

//Pilsner container
var pilsnerTemp = getRndTemperature(3, 7);

document.getElementById("pilsnerTemp").innerHTML = pilsnerTemp;

var pilsner = new Beer(4, 6, pilsnerTemp);
rightTemp(pilsner.maxTemp, pilsner.minTemp, pilsner.internalTemp);

//IPA container
var ipa = new Beer(5, 6, getRndTemperature(4, 7));
rightTemp(ipa.maxTemp, ipa.minTemp);

//Lager container
var lager = new Beer(4, 7, getRndTemperature(3, 8));
rightTemp(lager.maxTemp, lager.minTemp);

//Stout container
var stout = new Beer(6, 8, getRndTemperature(5, 9));;
rightTemp(stout.maxTemp, stout.minTemp);

//Wheat beer) container
var wheatBeer = new Beer(3, 5, getRndTemperature(2, 6));
rightTemp(wheatBeer.maxTemp, wheatBeer.minTemp);
