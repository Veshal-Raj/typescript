class Circle {
    private _radius: number;
  
    constructor(radius: number) {
      this._radius = radius;
    }
  
    // Getter for the radius property
    get radius(): number {
      console.log("Getting radius");
      return this._radius;
    }
  
    // Setter for the radius property
    set radius(newRadius: number) {
      console.log("Setting radius");
      if (newRadius >= 0) {
        this._radius = newRadius;
      } else {
        console.log("Invalid radius. Must be non-negative.");
      }
    }
  }
  
  // Create an instance of the Circle class
  const myCircle = new Circle(5);
  
  // Use the getter
  console.log("Current Radius:", myCircle.radius);
  
  // Use the setter
  myCircle.radius = 7; // Setting radius
  console.log("New Radius:", myCircle.radius);
  
  // Attempting to set an invalid radius
  myCircle.radius = -3; // Setting radius, Invalid radius. Must be non-negative.
  
  // Accessing the radius property directly (not recommended due to encapsulation)
  console.log("Direct Access:", myCircle['_radius']); // Direct Access: 7
  