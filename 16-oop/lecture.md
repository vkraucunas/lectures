# OOP

## Objectives
- Describe what Object Oriented Programming is
- Explain four key concepts of OOP
- Work with properties and methods
- Implement prototypes to add functionality to constructors
- Use OOP with ES6 classes

### Describe what Object Oriented Programming is
Object-oriented programming (OOP) is a programming paradigm that uses abstraction to create models based on the real world. OOP uses several techniques from previously established paradigms, including modularity, polymorphism, and encapsulation. Today, many popular programming languages (such as Java, JavaScript, C#, C++, Python, PHP, Ruby and Objective-C) support OOP.

OOP envisions software as a collection of cooperating objects rather than a collection of functions or simply a list of commands (as is the traditional view).


### Explain four key concepts of OOP
Encapsulation
    - Grouping data and behavior together
    - Controlling how data and behavior are accessed
Inheritance
    - It allows for developers to easily develop systems in which shared behavior is kept one place (the superclass), and specific behavior is kept in another (the subclass). Inheritance is especially useful because it models many hierarchies we see in the world:
Abstraction
    -Abstraction in OOP is the concept of thinking about things generally, rather than concretely. It means looking for shared behavior and attributes, and treating them in a shared way. A Goose is different from a Snake, but for purposes of the scripts in this lesson, they are both Beasts. Abstraction means writing programs that are capable of handling abstractions like Dog, rather than writing programs that can only deal with Fido and break when you give them Fefe.
    -Thinking big picture
Polymorphism
    -Polymorphism means "many forms", and refers to the different objects having same method name with a different implementation- the ability to override things that have been inherited.

### Work with properties and methods
properties - variables
methods - functions

### Implement prototypes to add functionality to constructors


### Use OOP with ES6 classes
class Employee {
  constructor(firstName, familyName) {
    this._firstName = firstName;
    this._familyName = familyName;
  }

  getFullName() {
    return `${this._firstName} ${this._familyName}`;
  }
}

class Manager {
  constructor(firstName, familyName) {
    this._firstName = firstName;
    this._familyName = familyName;
    this._managedEmployees = [];
  }

  getFullName() {
    return `${this._firstName} ${this._familyName}`;
  }

  addEmployee(employee) {
    this._managedEmployees.push(employee);
  }
}
