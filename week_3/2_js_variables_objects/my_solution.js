// I worked by myself on this challenge.




// Pseudocode
// 
// set secretNumber to 7;
// set password to 'just open the door';
// set allowed in to false;
// set members to an empty array;
// create function to add members:
  // function newMember means
  //     push new member to list of members. 

// __________________________________________
// Write your code below.

// var secretNumber = 7;

// var password = 'just open the door';

// var allowedIn = false;



// var members = [];

// members.push('John');

// members.push('Alex');

// members.push('Guy in Members Only jacket');

// members.push('Mary');  


// __________________________________________
// Refactored Code: Include a refactored version (or justification of your original code) here. 


var secretNumber = 7;

var password = 'just open the door';

var allowedIn = false;

var members = [];

var addMembers = function(name) {
    members.push(name);
};

addMembers('John');

addMembers('Alex');

addMembers('Guy in Members Only Jacket');

addMembers('Mary');

console.log(members);

// __________________________________________
// Reflection: Use the reflection guidelines to write a reflection here. 
// This was a fun excercise. I had a GPS today where one member didn't show so I got an 
// hour of JS tutoring which was very helpful for doing thing. 

// First I Pseudocoded and then started coding. The first way I solved it was to call .push on
// members with the names as parameters. This wasn't DRY as it could be, so I wrote a function
// to add members, and just called that. I imagine this would scale better and be easier to 
// change if needed. 
// 
// 
// 
// 
// 


// __________________________________________
// Driver Code:  Do not alter code below this line.

function assert(test, message, test_number) {
  if (!test) {
    console.log(test_number + "false");
    throw "ERROR: " + message;
  }
  console.log(test_number + "true");
  return true;
}

assert(
  (typeof secretNumber === 'number'),
  "The value of secretNumber should be a number.",
  "1. "
)

assert(
  secretNumber === 7,
  "The value of secretNumber should be 7.",
  "2. "
)

assert(
  typeof password === 'string',
  "The value of password should be a string.",
  "3. "
)

assert(
  password === "just open the door",
  "The value of password should be 'just open the door'.",
  "4. "
)

assert(
  typeof allowedIn === 'boolean',
  "The value of allowedIn should be a boolean.",
  "5. "
)

assert(
  allowedIn === false,
  "The value of allowedIn should be false.",
  "6. "
)

assert(
  members instanceof Array,
  "The value of members should be an array",
  "7. "
)

assert(
  members[0] === "John",
  "The first element in the value of members should be 'John'.",
  "8. "
)

assert(
  members[3] === "Mary",
  "The fourth element in the value of members should be 'Mary'.",
  "9. "
)