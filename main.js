var globalOne = "This";
var globalTwo = "Yes";

function hasOuterScope() {
    console.log(globalOne);
}

hasOuterScope()







function doesNotLeakVariables() {
    var localOne = 42;
}

console.log(localOne);









for(let x = 0; x < 10; x++) {
}
console.log(x);








var notDefined;
console.log("notDefined: " + notDefined);  // What happens?








console.log("nonExistent: " + nonExistent);
// Undefined or Error?








var newGlobal;

function accessOuterScope() {
    var localOne = 42;
    newGlobal = localOne;
}

doesNotLeakVariables();
console.log("newGlobal: " + newGlobal);







var valerie = "purple hair";
function hairDye() {
    var valerie = "green hair";
}

console.log(valerie);








var valerie = "purple hair";
function hairDye() {
    valerie = "green hair";
}

console.log(valerie);








var valerie = "purple hair";
function hairDye() {
    var valerie = "green hair";
}

hairDye()
console.log(valerie);









console.log( declaration() );
function declaration() {
    return "declaration ran"
}

// What happens?









console.log( declaration() );
var declaration = function() {
    return "declaration ran"
}

// What happens?









var a = [2,3,5];
console.log(b);
var b = a;









function enclosingFunction() {
    var counter = 0;
    return function() {
        counter += 1;
        console.log(counter);
    }
}

var closure = enclosingFunction();
// What will log on these lines?
closure();
closure();
closure();
closure();
