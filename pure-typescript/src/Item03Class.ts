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
  
  // Rectangle 을 클래스로 선언하면 타입과 값 모두 사용할 수 있다. 따라서 instanceof를 사용할 수 있다.
  function calculateArea(shape: Shape) {
    if (shape instanceof Rectangle) {
      shape // Type is Rectangle
      return shape.width * shape.height
    } else {
      shape // Type is Square
      return shape.width * shape.width // OK
    }
  }

  const shape:Shape = new Square(100);
  // const shape:Shape = new Rectangle(100, 200);
  // const shape:Shape = {width:100, height:200};
  
  console.log(calculateArea(shape));
}