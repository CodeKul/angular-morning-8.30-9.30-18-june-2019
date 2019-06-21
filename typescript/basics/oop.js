"use strict";
exports.__esModule = true;
var Car = /** @class */ (function () {
    function Car() {
    }
    Car.prototype.speedUp = function () {
        this.speed++;
    };
    return Car;
}());
exports.Car = Car;
var cr = new Car();
cr.speedUp();
