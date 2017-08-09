var User = require("./User");
var Admin = require("./Admin");

// **Instructions - Putting it all together**:
//   * Implement the logic for the `CLI` component. You should begin planning the component with pseudocode.
//   * This will tie everything together
//   * Modify both of your `Admin` and `User` modules to utilize `module.exports` now.
//   * **Require** both `Admin` and `User` modules
//   * Read the command-line and run the appropriate code in the appropriate place
//     * For `node CLI admin`
//       * create a `new Admin()` object
//       * call the `getData` method
//     * For `node CLI user location`
//       * create a `new User` object passing the `name` and `location` as constructor arguments
//       * call `newUserSearch` and pass the `name` and `location` to it
var name = process.argv[2];
var isValidName = (name.trim().length > 0);
var location = process.argv[3];

if (name.toLowerCase() === "admin") {
    var admin = new Admin();
    admin.getData();
} else if (name.toLowerCase() === "user") {
    var person = new User(name, location);
    person.getUsersWeather();
} else {
    console.log("Get outta here, foo");
}