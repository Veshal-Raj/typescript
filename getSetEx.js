var Circle = /** @class */ (function () {
    function Circle(radius) {
        this._radius = radius;
    }
    Object.defineProperty(Circle.prototype, "radius", {
        // Getter for the radius property
        get: function () {
            console.log("Getting radius");
            return this._radius;
        },
        // Setter for the radius property
        set: function (newRadius) {
            console.log("Setting radius");
            if (newRadius >= 0) {
                this._radius = newRadius;
            }
            else {
                console.log("Invalid radius. Must be non-negative.");
            }
        },
        enumerable: false,
        configurable: true
    });
    return Circle;
}());
// Create an instance of the Circle class
var myCircle = new Circle(5);
// Use the getter
console.log("Current Radius:", myCircle.radius);
// Use the setter
myCircle.radius = 7; // Setting radius
console.log("New Radius:", myCircle.radius);
// Attempting to set an invalid radius
myCircle.radius = -3; // Setting radius, Invalid radius. Must be non-negative.
// Accessing the radius property directly (not recommended due to encapsulation)
console.log("Direct Access:", myCircle['_radius']); // Direct Access: 7
