// 1) Write a JavaScript program to get the volume of a Cylinder, Sphere and
// Cone with four decimal places using objects and classes.
// Create classes for volumes for each geometric shape which returns the
// output using the getVolume() method.

const pi = 3.14;
class Parameter {
  constructor(radius, height) {
    this.r = radius;
    this.h = height;
  }
  getVolumeOfCylinder() {
    let x = pi * this.r * this.r * this.h;
    return x.toFixed(4);
  }
  getVolumeOfSphere() {
    let x = (4/3)*pi * this.r * this.r * this.r;
    return x.toFixed(4);
  }
  getVolumeOfCone() {
    let x = (pi * this.r * this.r * this.h)/3;
    return x.toFixed(4);
  }
}

let Parameter1 = new Parameter(2, 2);

sphere = Parameter1.getVolumeOfSphere();
cone = Parameter1.getVolumeOfCone();
cylinder = Parameter1.getVolumeOfCylinder();

console.log(`the volume of Sphere is ${sphere}`);
console.log(`the volume of Cone is ${cone}`);
console.log(`the volume of Cylinder is ${cylinder}`);
