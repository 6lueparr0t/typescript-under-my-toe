export default function() {
  console.log("====== Item03Interface ======");
/* interface 에서의 extends 상속

  interface Square {
    width: number
  }
  interface Rectangle extends Square {
    height: number
  }
  */
  interface Square {
    kind: 'square'
    width: number
  }
  interface Rectangle {
    kind: 'rectangle'
    height: number
    width: number
  }
  type Shape = Square | Rectangle

  function calculateArea(shape: Shape) {
    console.log("fn:calculateArea => ");
    
    // shape 이 instanceof 를 통해 특정 타입으로 지정되어있는지 확인한다.
    // if (shape instanceof Rectangle) {

    // in : 타입이 있는지 없는지 조사한다.
    if ('height' in shape) {
      return shape.width * shape.height
    } else {
      return shape.width * shape.width
    }
  }
  
  const shape:Shape = {width:100, height:200, kind: 'rectangle'};
  
  console.log(calculateArea(shape));
}