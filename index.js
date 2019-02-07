
var Dog = require('./Dog.js');
var Cat = require('./Cat.js');


var dogTom = new Dog('Tom');

var meoTom = new Cat('Tom');

dogTom.eat(meoTom);

console.log(dogTom);