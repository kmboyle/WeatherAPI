var fs = require('fs');

var Admin = function() {
    this.getData = function() {
        fs.readFile("log.txt", "utf8", function(err, data) {
            console.log(data);
        })
    }
}

// var myAdmin = new Admin();
// myAdmin.getData();

// **Instructions - Admin**:

//   * Implement the logic for the `Admin` component. You should begin planning the component with pseudocode.

//   * This component requires you to have a constructor and add a method to show the contents of a file. 

//   * Create an `Admin` constructor.

//   * Create a method called `getData` that will:
//     * open a file called `log.txt`
//     * `console.log` the contents to the screen

//   * Test your Admin constructor by manually calling it at the bottom of the file.

module.exports = Admin;