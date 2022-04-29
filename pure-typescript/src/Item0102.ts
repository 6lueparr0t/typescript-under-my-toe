import { IBooleans, IValues, IStructures } from './interfaces/example';
import hello from './Hello'

export default function() {
  hello();
  // return "Hello, World!"
  
  const x = 2 + '3' // OK, type is string
  const y = '2' + 3 // OK, type is string
  
  console.log(x); // 23
  console.log(y); // 23
  
  const names:Array<String> = ["Alice", "Bob"]
  console.log(names[1].toUpperCase())
  
  // tsConfig: {"noImplicitAny":false,"strictNullChecks":false}
  // 해당 설정 적용 시, 아래 코드가 정상 실행 된다.
  /*
  function add(a, b) {
    return a + b
  }
  console.log(add(10, null))
  */
  
  // ? : Optional Properties
  function printName(obj: { first: string; last?: string }) {
    console.log(obj.first);
    if(obj.last) {
      console.log(obj.last);
    }
  }
  
  // Both OK
  printName({ first: "first" });
  printName({ first: "first", last: "last" });
  
  // ! : Non-null Assertion
  function liveDangerously(x?: number | null) {
    // No error
    console.log(x!.toFixed());
  }
  
  liveDangerously(123.123);
}