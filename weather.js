var weather = require('weather-js');


var Weather = function(name, location) {
    this.name = name;
    this.location = location;
    this.getWeather = function() {

        weather.find({ search: this.location, degreeType: 'F' }, function(err, result) {
            if (err) {
                console.log(err);
            }
            console.log(JSON.stringify(result, null, 2));
        });
    }
}

var myWeather = new Weather("Kevin", "Charlotte, NC");
myWeather.getWeather();