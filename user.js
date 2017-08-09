// **Instructions - User**:
//   * Implement the logic for the `User` component. You should begin planning the component with pseudocode.
//   * This component will **require** you to use your shiny new `Weather` module (modify it to use `module.exports` now). 
//   * Create a `User` constructor. It should accept a user's name and location as arguments.  It should also get the current date/time and store it on itself (`this.date = ???`)

//   * Objects returned by the `User` constructor should also have a `newUserSearch` method.  This method should:
//     * accept `name` and `location` as parameters
//     * create a new `Weather` object
//     * write to a file called `log.txt`.  This should look like  `Name: Bill  Location: Charlotte, NC  Date: 1502231670356`
//   * Test your Weather constructor by feeding it dummy data for now.