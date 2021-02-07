// ***** JS FUNCTIONS ADVANCED HOMEWORK *****




// TASK 1:

// Create a constructor function for generating student objects. Each student object should have name, last name, age and average grade.

//SOLUTION

function Students(name, lastName, age, grade) {
    this.name = name;
    this.lastName = lastName;
    this.age = age;
    this.averGrade = grade;
}

var marina = new Students('Marina', 'Marinković', 30, 8.01);

console.log(marina);

// TASK 2:

// Create a constructor function for generating objects with data about players of your favorite football team (name, age, goals scored, yellow cards). You can find statistics online.

//SOLUTION

function Players(name, age, goals, cards) {
    this.team = 'Barcelona';
    this.name = name;
    this.age = age;
    this.goals = goals;
    this.yellowCards = cards;
}

var maradona = new Players('Diego Maradona', 100, 500, 20);
var messi = new Players('Leo Messi', 20, 100, 10);
var pele = new Players('Pele', 300, 600, 1);
var marko = new Players('Marko Markovic', 200, 100, 10);
var milos = new Players('Milos Milosevic', 40, 200, 0);

console.log(maradona, messi, pele, marko, milos);

// TASK 3:

// Try to do the same thing as in the previous task, but when creating player objects try to do it dinammicaly (using loop). For that you'll need data in following format:

// var players = [["Player name", 27, 12, 4], ["Player name", 27, 12, 4], ["Player name", 27, 12, 4]];

// This array is just example, change data in this array with data of players you choose.

//SOLUTION

function Players(name, age, goals, cards) {
    this.team = 'Barcelona';
    this.name = name;
    this.age = age;
    this.goals = goals;
    this.yellowCards = cards;
}

var players = [['Diego Maradona', 28, 12, 4], ['Leo Messi', 27, 14, 5], ['Pele', 20, 18, 20]];

var playersRepack = [];

for (var i = 0; i < players.length; i++) {

    playersRepack[playersRepack.length] = new Players(players[i][0], players[i][1], players[i][2], players[i][3]);
   
}

console.log(playersRepack);

// TASK 4:

// Create a construction function that should contain properties for first number, second number, and method. Then create a four instances of object from that constructor, each with different numbers, and different method. First should have method for multiplying of its own numbers, second for dividing, third for adding and fourth for subtracting.

//SOLUTION

function NumOperation(a, b, c) {
    this.firstNum = a;
    this.secondNum = b;
    this.operation = c;
}

var multiplyingResult = new NumOperation(4, 4, function() {
    return this.firstNum * this.secondNum;
});

var dividingResult = new NumOperation(20, 5, function() {
    return this.firstNum / this.secondNum;
});

var addingResult = new NumOperation(50, 20, function() {
    return this.firstNum + this.secondNum;
});

var substractingResult = new NumOperation(100, 18, function() {
    return this.firstNum - this.secondNum;
});

console.log(multiplyingResult, dividingResult, addingResult, substractingResult);
console.log(multiplyingResult.operation(), dividingResult.operation(), addingResult.operation(), substractingResult.operation());

// TASK 5:

// Test your understanding of closures and scope with following examples.

// IMPORTANT! - First read the task and try to give an answer, and then copy the code to your file and check what do you get in console.


//     QUESTION 1:

// 	What’s the result of executing this code and why?

// 		function test() {
// 		   console.log(a);
// 		   console.log(foo());
		   
// 		   var a = 1;
// 		   function foo() {
// 		      return 2;
// 		   }
// 		}

// 		test();


// 	QUESTION 2:

// 	What is result?

/*
		var a = 1; 

		function someFunction(number) {
		  
            function otherFunction(input) {
		    return a;
		    }
		  
		    a = 5;
		  
		    return otherFunction;

		}

		var firstResult = someFunction(9);

		var result = firstResult(2);

        console.log(result);
*/

// 	QUESTION 3:

// 	What is the result of the following code? Explain your answer.

// 		var fullname = 'John Doe';
// 		var obj = {
// 		   fullname: 'Colin Ihrig',
// 		   prop: {
// 		      fullname: 'Aurelio De Rosa',
// 		      getFullname: function() {
// 		         return this.fullname;
// 		      }
// 		   }
// 		};

// 		console.log(obj.prop.getFullname());


// 		var test = obj.prop.getFullname;

// 		console.log(test());


// 	QUESTION 4:

// 	What will you see in the console for the following example?

		// var a = 1;
        
		// function b() { 
		//     a = 10; 
		//     return; 
		//     function a() {

        //     } 
		// } 

		// b(); 

		// console.log(a);

