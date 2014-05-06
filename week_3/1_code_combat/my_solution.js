// I worked on this challenge by myself
 
// For each mission, write the title as a comment. (Shown here). Also include pseudocode as a comment. 
// Note: to make commenting easier, you can highlight the section you want to comment and hold 
// command + / This will comment the line. 
 
 
 
//  Rescue Mission

// move down 
// move down
// move down
// move right

// move up
// move up
// move right
// move right
// move down
// move down


this.moveDown();
this.moveDown();
this.moveDown();
this.moveRight();
this.moveUp();
this.moveUp();
this.moveRight();
this.moveRight();
this.moveDown();

this.attackNearbyEnemy();


// Grab the Mushroom

// move up 
// move right
// move left
// move up
// attack

this.moveUp();
this.moveRight();
this.moveLeft();
this.moveUp();
this.attackNearbyEnemy();

// Drink me

// move right
// attack
// move right
// move down
// move up 
// move right
// attack

this.moveRight();
this.attackNearbyEnemy();
this.moveRight();
this.moveDown();
this.moveUp();
this.moveRight();
this.attackNearbyEnemy();

// Taunt the Guards

// move right
// bust down door
// move right
// say hey there
// move left 2x
// say attack
// move right
// say follow me
// move right 2x
// move up
// move right
// say hey there
// say attack 2x
// say follow me
// move right 2x

this.moveRight();
this.bustDownDoor();

// Delete the "//" in front of each line below.
this.moveRight();
this.say("Hey there!");
this.moveLeft();
this.moveLeft();
this.say("Attack!");

// Now get Phoebe to follow through the dungeon.
this.moveRight();
this.say("Follow me.");

this.moveRight();
this.moveRight();
this.moveUp();
this.moveRight();
this.say("Hey there!");
this.say("Attack!");
this.say("Attack!");

this.say("Follow me.");
this.moveRight();
this.moveRight();




// It's a Trap

// move down 2x
// say hey there
// move up 2x

// Taunt the Ogre and run for cover!
this.moveDown();
this.moveDown();
this.say('Hey');
this.moveUp();
this.moveUp();

// Taunt

// say 'hey asshole' until ogre comes
//say 'atack'
this.say("hey asshole")

this.say('hey asshole!');

this.say('hey asshole!');
this.say('hey asshole!');
this.say('hey asshole!');
this.say('you jerk!');
this.say('boo!');
this.say('attack!');


// Cowardly Taunt

// move to x,y near ogres
// say 'phththt'
// move to safety near towers

this.moveXY(49, 16);
this.say('pthhhhh!');
this.moveXY(70, 10);  // This is a safe spot.

// Commanding Followers

// walk to troops
// say hi
// say follow
// walk near enemy
// say attack
// let them do dirty work 

this.moveXY(49, 66);
this.moveXY(60, 63);
this.moveXY(75, 63);
this.say("Hail, friends!");

this.say('follow me!');
this.moveXY(62, 45);

this.say('attack them!')

// Mobile Artillery

// move in range
// attack
// repeat until all are slaughtered! 


this.moveXY(30, 26);  // Move into range
this.attackXY(46, 5);  // Shoot once in the middle of the ogres
this.moveXY(41, 41);
this.attackXY(50, 68);
this.attackXY(45, 55);
this.moveXY(45, 40);
this.attackXY(68, 57);
this.attackXY(55, 45);



 
 //'this' refers to the object that the function is being performed on.
 //the () are where you put the parameters of the function.
 //the semicolons tell the computer that the line/ function is over.
 
 
 
// Reflection:
// // Write your reflection here.
// I had fun killing ogres. I have done slightly more advanced JavaScript 
// before so this was easy, but it make writing this reflection harder, because 
// I don't have a whole lot to say. I feel extremely confident in the learning 
// competencies. Yay! 

