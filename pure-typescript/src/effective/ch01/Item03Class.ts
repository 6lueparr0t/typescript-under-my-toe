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
  
  // Rectangle 클래스를 타입으로써도 사용할 수 있다. 클래스에서 생성된 인스턴스이기 때문에 instanceof 를 사용할 수 있다.
  function calculateArea(shape: Shape) {
    if (shape instanceof Rectangle) {
      shape // Type is Rectangle
      return shape.width * shape.height
    } else {
      shape // Type is Square
      return shape.width * shape.width // OK
    }
  }

  // const shape:Shape = new Rectangle(100, 200);
  // const shape:Shape = {width:100, height:200};
  
  console.log(calculateArea(new Square(100)));
}