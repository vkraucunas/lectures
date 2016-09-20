var Dog = function(name) {
    this.name = name;
    this.legs = 4;
    this.bark = function() {
        return "Woof";
    }
}

var ferdi = new Dog('Ferdinand');

// console.log(ferdi.legs);

ferdi.legs = 3;

// console.log("Ferdi post-accident", ferdi.legs);

// console.log('Ferdi says', ferdi.bark());

var Mug = function(color) {
    this.color = color;
    this.fullness = 50;
    this.contents = 'tea';
}
Mug.prototype.drink = function() {
        if (this.fullness === 0) {
            this.refill();
            console.log("refilling my drink");
            this.drink();
        } else {
            this.fullness -= 10;
        }
    };

Mug.prototype.refill = function() {
    this.fullness = 100;
};
Mug.prototype.break = function() {
    return "Mug is broken, despair";
}

var valMug = new Mug('white');
var jaimieMug = new Mug('grey');

console.log(valMug.break());

console.log("in the beginning Val's mug was",  valMug.fullness +"% full");
// console.log("in the beginning Jaimie's mug was",  jaimieMug.fullness +"% full");
valMug.drink();
valMug.drink();
valMug.drink();
console.log("After a drink, Val's mug was",  valMug.fullness +"% full");
valMug.drink();
valMug.drink();

valMug.drink();
valMug.drink();
valMug.drink();
console.log("After a drink, Val's mug was",  valMug.fullness +"% full");
valMug.drink();

console.log("After a drink, Val's mug was",  valMug.fullness +"% full");
// console.log("After Valerie's drink from her own mug, Jaimie's mug was",  jaimieMug.fullness +"% full");















