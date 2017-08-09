var Weather = require("./Weather");
var fs = require("fs");
var file = require("./log.txt");

function User(name, location) {
    this.name = name;
    this.location = location;
    this.date = Date.now();
    this.newUserSearch = function(name, location) {
        var search = new Weather(name, location);
        var logText = `\nName: ${name} Location: ${location} Date: ${this.date}`;
        fs.appendFile("log.txt", logText);
        search.getWeather();

    }
}

// **Instructions - User**:
//   * Implement the logic for the `User` component. You should begin planning the component with pseudocode.
//   * This component will **require** you to use your shiny new `Weather` module (modify it to use `module.exports` now). 
//   * Create a `User` constructor. It should accept a user's name and location as arguments.  It should also get the current date/time and store it on itself (`this.date = ???`)

//   * Objects returned by the `User` constructor should also have a `newUserSearch` method.  This method should:
//     * accept `name` and `location` as parameters
//     * create a new `Weather` object
//     * write to a file called `log.txt`.  This should look like  `Name: Bill  Location: Charlotte, NC  Date: 1502231670356`
//   * Test your Weather constructor by feeding it dummy data for now.
var person = new User("Bill", "Charlotte, NC");
person.newUserSearch(person.name, person.location);
// var user = new weather(person.name, person.location);
// user.getWeather();