var chalk = require('chalk');

function Dog(name){
    this.name = name;
    this.stomach = [];
}

Dog.prototype.eat = function(cat){
    this.stomach.push(cat);
}


Dog.prototype.sayHi = function(){
    console.log('Hi, I am'+ chalk.red(this.name));
}

Dog.prototype.drink = function(){
    
}

module.exports = Dog;