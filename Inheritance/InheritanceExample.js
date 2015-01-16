var Vehicle = function(hasEngine, hasWheels) {
    this.hasEngine = hasEngine;
    this.hasWheels = hasWheels;
    this.run = function() {
        console.log("I am runinng from wehicle");
    }
}

var Car = function(make, model, hp, hasEngine, hasWheels) {
    this.make = make;
    this.model = model;
    this.hp = hp;
    this.base = Vehicle;
    this.base(hasEngine, hasWheels);
    this.run = function() {
        console.log("I am runinng from car");
    }
}

function testFunction() {
    var myCar = new Car('maruti', 'alto', 250, 'vishal', 'sharma');
    myCar.run();
}

testFunction();
