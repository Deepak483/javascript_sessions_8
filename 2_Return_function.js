/**
 * @param {string} day
 * @return {string}
 */

function greeting(day) {
  // Create the message
  const message = 'Today is: ' + day;

  // Return a function that returns the message
  return function () {
    return message;
  };
}
if (greeting('Sunday')() !== 'Today is: Sunday')
  console.log(
    "Test fails: Expected 'Today is: Sunday' for input day = 'Sunday' "
  );
else console.log("Sample test case for input  day = 'Sunday' passed!");

module.exports = greeting;
