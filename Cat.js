function Cat(name){
    this.name = name;
}

Cat.prototype.eat = function(){
    this.die = true;
}

module.exports = Cat;