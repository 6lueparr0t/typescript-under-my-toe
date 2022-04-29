export default function() {
  console.log("====== Item03Class ======");

  class Square {
    constructor(public width: number) {}
  }
  class Rectangle extends Square {
    constructor(public width: number, public height: number) {
      super(width)
    }
  }
  type Shape = Square | Rectangle
  
  function calculateArea(shape: Shape) {
    if (shape instanceof Rectangle) {
      shape // Type is Rectangle
      return shape.width * shape.height
    } else {
      shape // Type is Square
      return shape.width * shape.width // OK
    }
  }

  const shape:Shape = {width:100};
  
  console.log(calculateArea(shape));
}