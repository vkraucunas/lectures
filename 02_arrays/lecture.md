# Arrays!

## Objectives
- Explain what an array is
- Create and read and delete values in an array
- Utilize array methods to update values in an array
- Describe how to compare array values
- Explain mutability of reference data types in JavaScript

## What are some examples of things we store in lists?
- Students in cohort
- Inventory at a company
- Favorite colors

## What is an array?
- An array is an ordered lists of values

## Parts of an array
- Creating an array
	- var a = [];
	- var b = new Array; << downplay. 	
- "[ ]" < empty array literal
	- Truthy or falsy?
- Can contain any combination of data types in the literal, must be comma separated
	- Make an array that contains the following:
		- Name
		- Age
		- Whether you like ice cream or not (boolean)
- Can contain more arrays or objects

## Accessing values in an array
- Indexes
	- What is an index?
	- Developers start counting at 0
	- Example arrays with asking how to access them
	- Nested arrays how to access single value
- Accessing array values with bracket notation
- Deleting array values using bracket notation
	- deletes value MAINTAINS INDEX, use a method to delete value and index
- Examples of properties that do not change an array
	- .length
		- show how to use .length
	- .indexOf
		- how to use
	- instanceof
		- how to use

## Updating arrays with methods
- pop & push
	- end of the array
- shift & unshift
	- beginning of an array
- splice
	- add or remove 	
- slice
	- NOT DESTRUCTIVE
- sort
	- destructive
	- be careful. two digit number example
- reverse
- concat
- join
- forEach, map, reduce, filter < will be covered later

## Comparing arrays
- cannot be compared array to array. will always be false
	- why? like comparing human to human instead of name to name -- USE SAMS
- comparison must be value to value
	- a[0] === b[1]

## Mutability of Reference Types
- reference types are mutable
	- primative types are immutable
	- show what this means

## Review
- What is the syntax of an array?
- What data types can an array contain?
- What is an index?
- _Code Example_ How to access values?
- What happens when you use the keyword ```delete``` for an array value?
- _Slide with all method names_ Which is used for?
- What is a destructive method?
- How can you compare arrays?
- What does mutable mean? Can you give an example?
