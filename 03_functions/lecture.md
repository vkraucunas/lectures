# An Introduction to Functions with JavaScript

Today, we're going to explore the fascinating world of functions. This world may bewilder or intimidate some of you. Find solace in the fact that functions are nothing more than a way of re-using code. This realization will help you to eventually embrace the usage of functions and, dare I say, excitement for them. At the end of today's lessons, I hope that you guys are able to add functions to your coding tool-belt.

## Objectives

Students will be able to...

- 1 of 7: describe the concept of a function in one sentence
- 2 of 7: explain the syntax of a function
- 3 of 7: create a function
- 4 of 7: invoke a function
- 5 of 7: use the keyword `return`
- 6 of 7: add behavior with parameters and arguments
- 7 of 7: use the keyword `arguments`

### 1 of 7: What's a Function?

Let's start with our first objective: What's a function? In one sentence, we can say that a function is a sequence of instructions that achieve a specific task. I've always found definitions to be more meaningful when they are tied to the world around us. So let's pause for a moment and think of real-world examples that fit our definition....

When I think about functions in the real world, I often consider a recipe (e.g., making pumpkin pie) or a manual (e.g. assembling a coffee table from IKEA).

At this point, I hope that many of us can embrace our shared definition of a function--they are a sequence of instructions that achieve a specific task.

### 2 of 7: The Syntax of a Function

The way we create functions in the real world is different from how we create functions in JavaScript. In the real world, a recipe has a series of bullet points with instructions. In order to create functions in JavaScript, we need to use a particular syntax:

```javascript
function [[name]] ( [[parameters]] ) {
  [[body (i.e., statements, expressions, values)]]
}
```

There are four parts to the above code example:

1. Keyword `function`
1. Name for that function
1. Parameters - a comma separated list enclosed in parenthesis
1. Instructions - a variable number of optional instructions enclosed in curly braces

### 3 of 7:  Function Creation

We've now established the syntax of a function. Let's apply this knowledge to create a function named `greet()`, which will log to the console the string "Hello, World!":

```javascript
function greet() {
  console.log("Hello, World!");
}
```

Awesome, you guys just created a function. If we want to see the value of our function, we just type in the name of the function to our REPL (read, evaluate, print, loop):

```javascript
function greet() {
  console.log("Hello, World!");
}

greet
// function greet() {
//  console.log("Hello, World!");
// }
// undefined
```

### 4 of 7: Function Invocation


```javascript
function greet() {
  console.log("Hello, World!");
}

greet();
// "Hello, World!"
// undefined

greet();
// "Hello, World!"
// undefined

greet();
// "Hello, World!"
// undefined
```

That's it! Now we can re-use the instructions of `greet` whenever we want. Above, we just invoked it 3 times. :)

### 5 of 7: The keyword `return`

If you want to add instructions on what a function should return, you'll need to use the keyword `return`:

```javascript
function greet() {
  console.log("Hello, World!");
  return "You told me to return.";
}

greet()
// "Hello, World!"
// "You told me to return."
```

Awesome, you just used the keyword `return`. Take note that `return` has special behavior associated with it. The most notable is that once a function executes a `return` statement, all code succeeding it in a function never gets executed. In other words, be careful where and when you use `return`:

```javascript
function greet() {
  return "You'll never reach the console.log() message.";
  console.log("Hello, World!");
}

greet();
// "You'll never reach the console.log() message."
```

```js
function twoReturns() {
  return "I'm the only return that gets executed";
  return "You told me to return.";
  console.log("Hello, World!");
}

twoReturns()
// "I'm the only return that gets executed";
```

### 6 of 7: Parameters and Arguments

So far, we've learned how to re-use code with the aid of functions. We can define a function once, and then invoke it many times. However, during each invocation, we execute the same code with the same static values--the output never changes.

This outcome is analogous to a website that greets every user whom logs into a site with the the following greeting: "Hello, user." How generic; how static! The value of that greeting would be infinitely better if every user could be greeted with their name--"Hello, Danny." To add this behavior to our code, we can include parameters and arguments to our functions.

#### Parameters

When we define a function, we can create variables that are local to a function and assigned during invocation. These specific variables are called parameters:

```javascript
function greet(name) {
  return "Hello, " + name;
}
```

#### Arguments

To dynamically assign a value to `name`, we need to pass a value to `greet()` during invocation.

```javascript
function greet(name) {
  return "Hello, " + name;
}

greet("Homer");
// "Hello, Homer"
```



### 7 of 7: The keyword `arguments`

We want to utilize a keyword that exists only inside of functions: `arguments`. This keyword exhibits the following behavior:

* the keyword `arguments` exist only inside of a function
* the keyword `arguments` is array-like, which means it has some functionality of an array, such as `length`, but not others.

Let's use `arguments` in a function and see what we can and cannot do:

```javascript
function args() {
  return arguments.length;
}

args(1,2,3);
// 3
```

Notice that the correct number of arguments is being logged to the console. We achieved this functionality with the `length` property being used on `arguments`. Since we have the ability to use dot notation with `arguments`, that's an insightful indicator that `arguments` is actually an object.

```javascript
function args() {
  console.log(arguments.pop());
}

args(1,2,3);
// ...arguments.pop is not a function...
```

## Valerie's process for writing a function
var result / return result

# Review
1. describe the concept of a function in one sentence
1. Whiteboards: Basic syntax of a function
1. create a function
1. invoke a function
1. When do we use the keyword `return`?
1. what is the difference between parameters and arguments?
1. What happens when you use the keyword `arguments`?
